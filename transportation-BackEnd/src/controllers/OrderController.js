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
  

module.exports = {
  createOrder,
};
