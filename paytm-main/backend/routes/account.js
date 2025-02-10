const express = require("express");
const { Account } = require("../db");
const authMiddleware = require("../middleware");
const Router = express.Router();

Router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userID,
  });
  res.json({
    balance: account.balance,
  });
});

Router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { to, amount } = req.body;

  // checking if sender has sufficient balance
  const account = Account.findOne({
    userId: req.userID,
  }).session(session);
  console.log("check 1");

  if (account.balance < amount) {
    res.statusMessage(400).json({
      message: "Insufficient funds",
    });
  }
  console.log("check 2");

  const toAccount = Account.findOne({
    userId: to,
  }).session(session);
  if (!toAccount) {
    res.json({
      message: "Invalid account",
    });
  }
  console.log("Check 3");

  const done = await Account.updateOne(
    {
      userId: req.userID,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);
  console.log("Check 4");
  const done2 = await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);
  console.log("Check 5");

  await session.commitTransaction();

  res.json({
    msg: "Transfer done",
  });
});

module.exports = Router;
