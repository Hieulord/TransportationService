const ClientService = require("../services/ClientService");

const createClient = async (req, res) => {
  try {
    // Kiểm tra các trường dữ liệu đầu vào
    const {
      clientCode,
      nameClient,
      genderClient,
      dateClient,
      email,
      phone,
      address,
    } = req.body;
    if (
      !clientCode ||
      !nameClient ||
      !genderClient ||
      !dateClient ||
      !email ||
      !phone ||
      !address
    ) {
      return res.status(400).json({
        message: "Các trường dữ liệu phải được nhập đầy đủ!",
      });
    }

    // Gọi hàm để tạo đơn hàng từ ClientService
    console.log("Đang thực thi tạo khách hàng...");
    const response = await ClientService.createClient(req);

    // Trả về phản hồi thành công
    return res.status(200).json(response);
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi tạo khách hàng:", error);
    return res.status(500).json({
      message: "Đã xảy ra lỗi trong quá trình tạo khách hàng.",
      error: error.message,
    });
  }
};

const updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const data = req.body;
    if (!clientId) {
      return res.status(200).json({
        status: "Err",
        message: "The clientId is required!!",
      });
    }
    const respone = await ClientService.updateClient(clientId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteClient = async (req, res) => {
  try {
    const client = req.params.id;
    if (!client) {
      return res.status(200).json({
        status: "Err",
        message: "The client is required!!",
      });
    }
    const respone = await ClientService.deleteClient(client);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllClient = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await ClientService.getAllClient(
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

const getDetailClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    if (!clientId) {
      return res.status(200).json({
        status: "Err",
        message: "The client id is required!!",
      });
    }
    const respone = await ClientService.getDetailClient(clientId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createClient,
  updateClient,
  deleteClient,
  getAllClient,
  getDetailClient,
};
