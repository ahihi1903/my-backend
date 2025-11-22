const express = require("express");
const router = express.Router();
const { addStudent, getStudent } = require("../controllers/studentController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "uploads/"); //nơi lưu file (floder uploads)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //thêm timestamp
  },
});

const student = multer({ storage });

//routes
router.post("/", student.single("photo"), addStudent);
router.get("/", getStudent);

module.exports = router;
