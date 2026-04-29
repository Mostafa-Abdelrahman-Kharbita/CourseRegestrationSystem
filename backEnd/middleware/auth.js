const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = decoded;
    next();
  } catch (err) {
    res.json({ message: "Invalid token" });
  }
};

module.exports = auth;