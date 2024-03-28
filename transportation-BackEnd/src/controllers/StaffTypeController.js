const StaffType = require("../services/StaffTypeService");

const createStaffType = async (req, res) => {
  try {
    // Kiểm tra dữ liệu đầu vào
    const { staffTypeCode, nameStaff } = req.body;
    if (!staffTypeCode || !nameStaff) {
      return res.status(400).json({
        message: "Mã loại và tên loại là bắt buộc.",
      });
    }

    // Gọi ProductService để tạo sản phẩm
    console.log("Chưa Thực Thi");
    const response = await StaffType.createStaffType(req);
    console.log("Đã thực thi");
    // Trả về phản hồi thành công
    return res.status(200).json(response);
  } catch (error) {
    // Xử lý lỗi
    console.log("Thực Thi Lỗi");
    return res.status(500).json({
      message: "Đã xảy ra lỗi trong quá trình tạo sản phẩm.",
      error: error.message,
    });
  }
};

const updateStaffType = async (req, res) => {
  try {
    const StaffTypeId = req.params.id;
    const data = req.body;
    if (!StaffTypeId) {
      return res.status(200).json({
        status: "Err",
        message: "The StaffTypeId is required!!",
      });
    }
    const respone = await StaffType.updateStaffType(StaffTypeId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteStaffType = async (req, res) => {
  try {
    const StaffTypeId = req.params.id;
    if (!StaffTypeId) {
      return res.status(200).json({
        status: "Err",
        message: "The StaffTypeId is required!!",
      });
    }
    const respone = await StaffType.deleteStaffType(StaffTypeId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllStaffType = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await StaffType.getAllStaffType(
      Number(limit) || 8,
      Number(page) || 0,
      sort,
      filter
    );
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailStaffType = async (req, res) => {
  try {
    const StaffTypeId = req.params.id;
    if (!StaffTypeId) {
      return res.status(200).json({
        status: "Err",
        message: "The service Type Id is required!!",
      });
    }
    const respone = await StaffType.getDetailStaffType(StaffTypeId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createStaffType,
  updateStaffType,
  deleteStaffType,
  getAllStaffType,
  getDetailStaffType,
};
