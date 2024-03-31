const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone,  password, confirmPassword } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      return res.status(200).json({
        status: "Err",
        message: "The input is required!!",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "Err",
        message: "The input is email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "Err",
        message: "The password is equal confirmPassword",
      });
    }
    console.log("isChekEmail", isCheckEmail);
    const respone = await UserService.createUser(req.body);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password) {
      return res.status(200).json({
        status: "Err",
        message: "The input is required!!",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "Err",
        message: "The input is email",
      });
    } else if (password !== password) {
      return res.status(200).json({
        status: "Err",
        message: "The password is equal",
      });
    }
    const respone = await UserService.loginUser(req.body);
    const { refresh_token, ...newRepone } = respone;
    res.cookie("refresh_token", refresh_token, {
      HttpOnly: true,
      Secure: true,
    });
    return res.status(200).json(newRepone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return res.status(200).json({
        status: "Err",
        message: "The userId is required!!",
      });
    }
    const respone = await UserService.updateUser(userId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "Err",
        message: "The userId is required!!",
      });
    }
    const respone = await UserService.deleteUser(userId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const respone = await UserService.getAllUser();
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "Err",
        message: "The userId is required!!",
      });
    }
    const respone = await UserService.getDetailUser(userId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const refreshToken = async (req, res) => {
  console.log("req.cookies", req.cookies);
  try {
    const token = req.cookies.refresh_token;
    if (!token) {
      return res.status(200).json({
        status: "Err",
        message: "The token is required!!",
      });
    }
    const respone = await JwtService.refreshTokenJwtService(token);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};


module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailUser,
  refreshToken,
};
