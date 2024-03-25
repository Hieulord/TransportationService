const OrderService = require("../services/OrderService");

const createOrder = async (req, res) => {
    try {
      // Kiểm tra các trường dữ liệu đầu vào
      const { orderCode, wayCode, receivingParty, sendingParty, deliveryAddress, price, moneyCollected, area } = req.body;
      if (!orderCode || !wayCode || !receivingParty || !sendingParty || !deliveryAddress || !price || !moneyCollected || !area) {
        return res.status(400).json({
          message: "Các trường dữ liệu phải được nhập đầy đủ!",
        });
      }
  
      // Gọi hàm để tạo đơn hàng từ OrderService
      console.log("Đang thực thi tạo đơn hàng...");
      const response = await OrderService.createOrder(req);
  
      // Trả về phản hồi thành công
      return res.status(200).json(response);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Lỗi khi tạo đơn hàng:", error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi trong quá trình tạo đơn hàng.",
        error: error.message,
      });
    }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const data = req.body;
    if (!orderId) {
      return res.status(200).json({
        status: "Err",
        message: "The orderId is required!!",
      });
    }
    const respone = await OrderService.updateOrder(orderId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(200).json({
        status: "Err",
        message: "The orderId is required!!",
      });
    }
    const respone = await OrderService.deleteOrder(orderId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await OrderService.getAllOrder(
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

const getDetailOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(200).json({
        status: "Err",
        message: "The service Type Id is required!!",
      });
    }
    const respone = await OrderService.getDetailOrder(orderId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
  

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getDetailOrder,
};
