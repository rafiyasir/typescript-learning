import { Request, Response } from "express";
import { get, controller } from "../decorators";

@controller("/auth")
class LoginController {
	@get("/login")
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
