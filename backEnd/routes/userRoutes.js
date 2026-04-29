const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  registerUser,
  loginUser
} = require("../controllers/userController");

// 🔐 middleware
const auth = require("../middleware/auth");

// 🔹 GET users (Protected 🔥)
router.get("/", auth, getUsers);

// 🔹 CREATE user (عادي)
router.post("/", createUser);

// 🔐 REGISTER
router.post("/register", registerUser);

// 🔐 LOGIN
router.post("/login", loginUser);

module.exports = router;