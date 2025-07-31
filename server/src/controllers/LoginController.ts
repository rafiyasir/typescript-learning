import { NextFunction, Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "../decorators";

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

	@post("/login")
	@bodyValidator("email", "password")
	postLogin(req: Request, res: Response) {
		const { email, password } = req.body;
		if (email === "hi@rafi.dev") {
			req.session = { login: true };
			res.redirect("/");
		} else {
			res.send("invalid email or password");
		}
	}

	@get("/logout")
	logout(req: Request, res: Response) {
		req.session = undefined;
		res.redirect("/");
	}
}
