const express =require("express");
const router = express.Router();
const multer = require("multer");
const path =require("path");
const {uploadFile, getAllFiles } = require("../controllers/uploadController");

// cấu hình nơi lưu file
const storage =  multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,"uploads/");//nơi lưu file (floder uploads)
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));//thêm timestamp

    },
});

const upload = multer({storage});

//routes
router.post("/upload",upload.single("file"),uploadFile);
router.get("/files",getAllFiles);

module.exports = router; 