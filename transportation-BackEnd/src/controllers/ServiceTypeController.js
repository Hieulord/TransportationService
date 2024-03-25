const ServiceType = require("../services/ServiceType");

const createServiceType = async (req, res) => {
  try {
    // Kiểm tra dữ liệu đầu vào
    const { serviceTypeCode, nameType } = req.body;
    if (!serviceTypeCode || !nameType) {
      return res.status(400).json({
        message: "Mã loại và tên loại là bắt buộc.",
      });
    }

    // Gọi ProductService để tạo sản phẩm
    console.log("Chưa Thực Thi");
    const response = await ServiceType.createServiceType(req);
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

const updateServiceType = async (req, res) => {
  try {
    const serviceTypeId = req.params.id;
    const data = req.body;
    if (!serviceTypeId) {
      return res.status(200).json({
        status: "Err",
        message: "The serviceTypeId is required!!",
      });
    }
    const respone = await ServiceType.updateServiceType(serviceTypeId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const delteServiceType = async (req, res) => {
  try {
    const serviceTypeId = req.params.id;
    if (!serviceTypeId) {
      return res.status(200).json({
        status: "Err",
        message: "The serviceTypeId is required!!",
      });
    }
    const respone = await ServiceType.delteServiceType(serviceTypeId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllServiceType = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await ServiceType.getAllServiceType(
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

const getDetailServiceType = async (req, res) => {
  try {
    const serviceTypeId = req.params.id;
    if (!serviceTypeId) {
      return res.status(200).json({
        status: "Err",
        message: "The service Type Id is required!!",
      });
    }
    const respone = await ServiceType.getDetailServiceType(serviceTypeId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createServiceType,
  updateServiceType,
  delteServiceType,
  getAllServiceType,
  getDetailServiceType,
};
