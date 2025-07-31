import { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.login) {
		next();
		return;
	} else {
		res.status(403);
		res.send("Not Permitted");
	}
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});
router.post("/login", (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;
	if (email && password && email === "hi@rafi.dev") {
		req.session = { login: true };
		res.redirect("/");
	} else {
		res.send("invalid email or password");
	}
});

router.get("/logout", (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
	res.send("Welcome");
});

export { router };
