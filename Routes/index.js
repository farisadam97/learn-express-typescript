const { Router: expressRouter } = require("express");
const router = expressRouter();

const todoRouter = require("./TodoRoute");

router.use("/todo", todoRouter);

module.exports = router;
