const express = require("express");
const app = express();
const userRouter = require("./user.js");
const Router = express.Router();

Router.use("/user", userRouter);

module.exports = Router;
