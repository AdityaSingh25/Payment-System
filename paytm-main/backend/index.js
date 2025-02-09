const express = require("express");
const mainRouter = require("./routes/index.js");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json()); // json body parser

const PORT = 3000;

app.use("/api/v1", mainRouter);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changepassword ...

// /api/v1/accont/transferMoney
// /api/v1/account/balance

app.listen(PORT, () => {
  console.log("Server Started at port " + PORT);
});
