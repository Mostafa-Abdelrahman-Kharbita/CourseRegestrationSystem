const Enrollment = require("../models/enrollmentModel");

// 🔹 enroll user in course
const enrollCourse = async (req, res) => {
  const { courseId } = req.body;

  const enrollment = new Enrollment({
    userId: req.user.id,   // 👈 من التوكن
    courseId
  });

  await enrollment.save();

  res.json(enrollment);
};

// 🔹 get my courses
const Course = require("../models/courseModel");

const getMyCourses = async (req, res) => {
  const enrollments = await Enrollment.find({
    userId: req.user.id
  });

  const courses = [];

  for (let e of enrollments) {
    const course = await Course.findById(e.courseId);
    courses.push(course);
  }

  res.json(courses);
};

module.exports = {
  enrollCourse,
  getMyCourses
};