const express = require("express");
const Router = express.Router();
const userRouter = require("./user.js");
const accountRouter = require("./account.js");

Router.use("/user", userRouter);
Router.use("/account", accountRouter);

module.exports = Router;
