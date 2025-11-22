const File = require("../models/fileModel");

const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "Chưa có file!!!" });
    }

    //lưu thông tin vào mongoosse
    const savedFile = await File.create({
      filename: file.originalname,
      path: file.path,
      size: file.size,
    });

    res.json({
      message: "Tải file thành công!!!",
      file: savedFile,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getAllFiles = async (req, res) => {
  const files = await File.find();
  res.json(files);
};

module.exports = { uploadFile, getAllFiles };
