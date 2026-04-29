const express = require("express");
const router = express.Router();

const {
  enrollCourse,
  getMyCourses
} = require("../controllers/enrollmentController");

const auth = require("../middleware/auth");

// 🔐 protected
router.post("/", auth, enrollCourse);
router.get("/my", auth, getMyCourses);

module.exports = router;