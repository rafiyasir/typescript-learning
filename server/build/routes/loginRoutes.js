"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.login) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send("Not Permitted");
    }
}
const router = (0, express_1.Router)();
exports.router = router;
// router.get("/login", (req: Request, res: Response) => {
// 	res.send(`
//       <form method="POST">
//         <p>
//           <label>Email</label>
//           <input name="email" />
//         </p>
//         <p>
//           <label>Password</label>
//           <input name="password" type="password" />
//         </p>
//         <button>Submit</button>
//       </form>
//     `);
// });
// router.post("/login", (req: RequestWithBody, res: Response) => {
// 	const { email, password } = req.body;
// 	if (email && password && email === "hi@rafi.dev") {
// 		req.session = { login: true };
// 		res.redirect("/");
// 	} else {
// 		res.send("invalid email or password");
// 	}
// });
router.get("/", (req, res) => {
    if (req.session && req.session.login) {
        res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/logout">Logout</a>
        </div>
      `);
    }
    else {
        res.send(`
        <div>
          <div>You are not Logged in </div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome");
});
