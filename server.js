const express = require("express");
const app = express();
const mongoose = require("mongoose");
const uploadRoutes = require("./routes/uploadRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());
app.use("/uploads", express.static("uploads")); // Cho phép truy cập file tĩnh
app.use("/api", uploadRoutes);
app.use("/students", studentRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/week4")
  .then(() => console.log("✅ Đã kết nối MongoDB"))
  .catch((err) => console.error(err));

app.listen(3000, () => console.log("🚀 Server chạy tại http://localhost:3000"));
