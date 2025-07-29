import { Request, Response, Router } from "express";

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
	res.send(`
      <form method="POST">
        <p>
          <label>Email</label>
          <input name="emai" />
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
	res.send(email);
	// if (email) {
	// 	res.send(email + password);
	// } else {
	// 	res.send("Email is not defined");
	// }
});

export { router };
