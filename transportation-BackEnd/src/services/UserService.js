const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken  } = require("./JwtService");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { firstName, lastName, email, password, confirmPassword } = newUser;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "OK",
          message: "The email is already",
        });
      }
      const hash = bcrypt.hashSync(password, 10);
      const createUser = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
        confirmPassword,
      });
      if (createUser) {
        resolve({
          staus: "OK",
          message: "SUCCESS",
          data: createUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { firstName, lastName, email, password, confirmPassword } = userLogin;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined!!",
        });
      }
      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({
          staus: "OK",
          message: "The password or user is incorrect!!",
        });
      }

      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        staus: "OK",
        message: "SUCCESS",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
};
