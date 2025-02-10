const express = require("express");
const userRouter = require("./user.js");
const Router = express.Router();
const accountRouter = require("./account.js");

Router.use("/user", userRouter);
Router.use("/account", accountRouter);

module.exports = Router;
