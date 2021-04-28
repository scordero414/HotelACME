const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});

const upload = multer({
  storage: storage,
  dest: path.join(__dirname, "public/uploads"),
  limits: { fieldSize: 2000000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(
      path.extname(file.originalname).toLocaleLowerCase()
    );
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: El archivo debe ser una imagen válida" + extname);
  },
}).single("image");

module.exports = upload;
