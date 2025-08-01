import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "../decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.login) {
		next();
		return;
	} else {
		res.status(403);
		res.send("Not Permitted");
	}
}

@controller("")
class RootController {
	@get("/")
	getRoot(req: Request, res: Response) {
		if (req.session && req.session.login) {
			res.send(`
          <div>
            <div>You are logged in</div>
            <a href="/auth/logout">Logout</a>
          </div>
        `);
		} else {
			res.send(`
          <div>
            <div>You are not Logged in </div>
            <a href="/auth/login">Login</a>
          </div>
        `);
		}
	}
	@get("/protected")
	@use(requireAuth)
	getProtected(req: Request, res: Response) {
		res.send("Welcome");
	}
}
