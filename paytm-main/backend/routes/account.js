const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    msg: "Hello",
  });
});
module.exports = Router;
