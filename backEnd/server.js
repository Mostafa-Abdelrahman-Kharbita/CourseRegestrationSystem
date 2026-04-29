// ===============================
// Main Server File
// This file initializes the Express server,
// sets up middleware, and starts the app on port 3000.
// ===============================
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const cors = require("cors");


app.use(express.json());

app.use(cors());
app.use("/courses", courseRoutes);
app.use("/users", userRoutes);
app.use("/enroll", enrollmentRoutes);
connectDB();

app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});