const Course = require("../models/courseModel");

// 🔹 GET all courses
const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

// 🔹 CREATE course
const createCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
};

module.exports = {
  getCourses,
  createCourse
};