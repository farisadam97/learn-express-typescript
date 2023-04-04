const { Router: expressRouter } = require("express");
const router = expressRouter();
const authMiddleware = require("../Middleware/Auth");

const todoRouter = require("./TodoRoute");
const authRouter = require("./AuthRoute");

router.use("/todo", authMiddleware, todoRouter);
router.use("/auth", authRouter);

module.exports = router;
