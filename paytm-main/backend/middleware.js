const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      msg: "Header wrong",
    });
  }
  // console.log(JWT_SECRET);

  const token = authHeader.split(" ")[1];

  //console.log(token);

  try {
    var decoded = jwt.verify(token, JWT_SECRET);
    //console.log(decoded);

    if (decoded.userID) {
      req.userID = decoded.userID; // adding userID to token
    }

    next();
  } catch (err) {
    //console.log(err.message);

    return res.status(403).json({
      msg: "token verification failed",
    });
  }
};

module.exports = authMiddleware;
