import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import "./controllers/LoginController";
import { AppRouter } from "../AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["lsdfdfddf"] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
