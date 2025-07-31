import { NextFunction, Request, Response } from "express";
import { get, controller, use } from "../decorators";

function logger(req: Request, res: Response, next: NextFunction) {
	console.log("Request Was Made");
	next();
}
@controller("/auth")
class LoginController {
	@get("/login")
	@use(logger)
	getLogin(req: Request, res: Response): void {
		res.send(`
      <form method="POST">
        <p>
          <label>Email</label>
          <input name="email" />
        </p>
        <p>
          <label>Password</label>
          <input name="password" type="password" />
        </p>
        <button>Submit</button>
      </form>
    `);
	}
}
