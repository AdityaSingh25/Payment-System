const express = require("express");
const Router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

Router.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email already taken / Incorrect Inputs",
    });
  }

  const existingUser = User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.json({
      message: " Email already taken / Incorrect Inputs",
    });
  }

  const user = await User.create(req.body);
  const userId = user._id;
  const token = jwt.sign(userId, JWT_SECRET);

  res.json({
    message: "user created successfully",
    token: token,
  });
});

module.exports = Router;
