const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/png" ||  file.mimetype == "image/jpeg") {
      callback(null, true);
    } else {
      console.log("only jpg and png files are accepted");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
