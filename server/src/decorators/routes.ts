import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RouterHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler;
}

function routeBinder(method: string) {
	return function (path: string) {
		return function (target: any, key: string, desc: RouterHandlerDescriptor) {
			Reflect.defineMetadata(MetadataKeys.path, path, target, key);
			Reflect.defineMetadata(MetadataKeys.method, method, target, key);
		};
	};
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const patch = routeBinder(Methods.patch);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
