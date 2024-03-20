const multer = require('multer');
const path = require('path');

// Cấu hình multer để lưu trữ hình ảnh vào thư mục public/images/products
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'images/products');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;