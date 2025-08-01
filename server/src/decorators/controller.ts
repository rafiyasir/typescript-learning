import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, Request, RequestHandler, Response } from "express";

function bodyValidators(keys: string): RequestHandler {
	return function (req: Request, res: Response, next: NextFunction) {
		if (!["POST", "PATCH", "PUT"].includes(req.method)) {
			next();
		}
		if (!req.body) {
			res.status(422).send("Invalid Request");
			return;
		}
		for (let key of keys) {
			if (!req.body[key]) {
				res.status(422).send(`Missing Key ${key}`);
				return;
			}
		}
		next();
	};
}
export function controller(routePrefix: string) {
	return function (target: Function) {
		const router = AppRouter.getInstance();
		Object.getOwnPropertyNames(target.prototype).forEach((key) => {
			const routeHandler = target.prototype[key];
			const path = Reflect.getMetadata(
				MetadataKeys.path,
				target.prototype,
				key
			);
			const method: Methods = Reflect.getMetadata(
				MetadataKeys.method,
				target.prototype,
				key
			);
			const middlewares =
				Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
				[];

			const requiredBodyProps =
				Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
				[];
			const validator = bodyValidators(requiredBodyProps);
			if (path) {
				router[method](
					`${routePrefix}${path}`,
					...middlewares,
					validator,
					routeHandler
				);
			}
		});
	};
}
