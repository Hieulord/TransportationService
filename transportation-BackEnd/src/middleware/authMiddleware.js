const jwt = require('jsonwebtoken')

const authMiddleware = (req, res) => {};
  jwt.verify(token, "shhhhh", function (err, decoded) {
    console.log(decoded.foo); // bar
  });

module.exports = {
  authMiddleware,
};
