const multer = require('multer');
const path = require('path');

// Đường dẫn đến thư mục "src/images/products"
const destinationPath = path.join(__dirname, '../images/products');

// Cấu hình multer để lưu trữ hình ảnh vào thư mục "src/images/products"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;