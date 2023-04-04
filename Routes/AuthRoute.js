const { Router } = require("express");
const authRouter = Router();
const userController = require("../Controller/UserController");

authRouter.route("/register").post(userController.registerUser);
authRouter.route("/login").post(userController.loginUser);

module.exports = authRouter;
