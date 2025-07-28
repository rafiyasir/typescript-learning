import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.send("HI router");
});

export { router };
