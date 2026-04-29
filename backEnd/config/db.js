const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   mongoose.connect("mongodb://127.0.0.1:27017/courseDB");
    console.log("MongoDB Connected ");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;