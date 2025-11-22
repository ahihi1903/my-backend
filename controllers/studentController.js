const Student = require("../models/studentModel");

//add
const addStudent = async (req, res) => {
  try {
    const { name, age } = req.body;
    const file = req.file;

    if (!file) {
      return res.json({ message: "Không có file!" });
    }

    const photo = file.path;
    const newStudent = await Student.create({
      name,
      age,
      photo,
    });

    res.json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getStudent = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

module.exports = { addStudent, getStudent };
