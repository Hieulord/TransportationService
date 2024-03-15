const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  // Kiểm tra xem token có trong header không
  if (req.headers.token) {
    // Nếu token tồn tại, chia chuỗi token để lấy phần thứ hai
    const tokenParts = req.headers.token.split(" ");
    if (tokenParts.length === 2) {
      const token = tokenParts[1];

      // Xác thực token
      jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
          return res.status(401).json({
            message: "Authentication failed",
            status: "ERROR",
          });
        }

        const { payload } = user;

        // Kiểm tra xem người dùng có quyền admin không
        if (payload?.isAdmin) {
          next(); // Tiếp tục đến middleware hoặc router tiếp theo
        } else {
          return res.status(403).json({
            message: "User is not authorized",
            status: "ERROR",
          });
        }
      });
    } else {
      return res.status(401).json({
        message: "Invalid token format",
        status: "ERROR",
      });
    }
  } else {
    // Nếu không có token, trả về một thông báo lỗi
    return res.status(401).json({
      message: "Token is missing",
      status: "ERROR",
    });
  }
};

const authUserMiddleware = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id;
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }
    const { payload } = user;
    if (payload?.isAdmin || payload?.id === userId) {
      next();
    } else {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }
  });
};

module.exports = {
  authMiddleware,
  authUserMiddleware,
};
