const express = require("express");
const Router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware");

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
  //console.log("check 1 ");

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  //console.log(existingUser);

  if (existingUser) {
    return res.status(411).json({
      message: " Email already taken / Incorrect Inputs",
    });
  }

  //console.log("check 2");

  const user = await User.create(req.body);
  const userId = user._id;

  const token = jwt.sign({ userId }, JWT_SECRET); //The jwt.sign method expects the payload to be an object. You were passing userId directly, which might cause issues. Instead, pass an object like { userId }.

  res.json({
    message: "user created successfully",
    token: token,
  });
});

Router.post("/signin", authMiddleware, async (req, res) => {
  //console.log(JWT_SECRET);

  const body = req.body;
  const signinBodySchema = zod.object({
    username: zod.string(),
    password: zod.string(),
  });

  const { success } = signinBodySchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const isUserAvailable = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  const userID = isUserAvailable._id;
  if (isUserAvailable) {
    var token = jwt.sign({ userID }, JWT_SECRET);
  }

  res.json({
    "token is": token,
  });

  //   res.status(411).json({
  //     message: "Error while login",
  //   });
});

Router.put("/", authMiddleware, async (req, res) => {
  //console.log("test");

  const updateBodySchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
  });

  const { success } = updateBodySchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }
  console.log(req.userID);

  await User.updateOne({ _id: req.userID }, req.body);
  res.json({
    message: "Updated Successfully",
  });
});

Router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    users: users.map((x) => ({
      username: x.username,
      firstName: x.firstName,
      lastName: x.lastName,
    })),
  });
});

module.exports = Router;
