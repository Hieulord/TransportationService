const StaffService = require("../services/StaffService");

const createStaff = async (req, res) => {
    try {
      // Kiểm tra các trường dữ liệu đầu vào
      const { staffCode, nameStaff, gender, dateStaff, email, phone, address, position , area } = req.body;
      if (!staffCode || !nameStaff || !gender || !dateStaff || !email || !phone || !address || !position || !area) {
        return res.status(400).json({
          message: "Các trường dữ liệu phải được nhập đầy đủ!",
        });
      }
   
      // Gọi hàm để tạo đơn hàng từ StaffService
      console.log("Đang thực thi tạo nhân viên...");
      const response = await StaffService.createStaff(req);
  
      // Trả về phản hồi thành công
      return res.status(200).json(response);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Lỗi khi tạo nhân viên:", error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi trong quá trình tạo nhân viên.",
        error: error.message,
      });
    }
};

const updateStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    const data = req.body;
    if (!staffId) {
      return res.status(200).json({
        status: "Err",
        message: "The staffId is required!!",
      });
    }
    const respone = await StaffService.updateStaff(staffId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    if (!staffId) {
      return res.status(200).json({
        status: "Err",
        message: "The staffId is required!!",
      });
    }
    const respone = await StaffService.deleteStaff(staffId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllStaff = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await StaffService.getAllStaff(
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

const getDetailStaff = async (req, res) => {
  try {
    const staffId = req.params.id;
    if (!staffId) {
      return res.status(200).json({
        status: "Err",
        message: "The service Type Id is required!!",
      });
    }
    const respone = await StaffService.getDetailStaff(staffId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
  

module.exports = {
  createStaff,
  updateStaff,
  deleteStaff,
  getAllStaff,
  getDetailStaff,
};
