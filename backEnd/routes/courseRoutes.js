const express = require("express");
const router = express.Router();

const { getCourses, createCourse } = require("../controllers/courseController");
const auth = require("../middleware/auth");

// 🔐 protected
router.get("/",  getCourses);
router.post("/", auth, createCourse);

module.exports = router;