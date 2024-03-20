const ProductService = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    // Kiểm tra dữ liệu đầu vào
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({
        message: 'Tên sản phẩm và giá sản phẩm là bắt buộc.',
      });
    }

    // Gọi ProductService để tạo sản phẩm
    console.log("Chua thuc thi");
    const response = await ProductService.createProduct(req);
    console.log("Da thuc thi");
    // Trả về phản hồi thành công
    return res.status(200).json(response);
  } catch (error) {
    // Xử lý lỗi
    console.log("Thuc thi loi");
    return res.status(500).json({
      message: 'Đã xảy ra lỗi trong quá trình tạo sản phẩm.',
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "Err",
        message: "The productId is required!!",
      });
    }
    const respone = await ProductService.updateProduct(productId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: "Err",
        message: "The productId is required!!",
      });
    }
    const respone = await ProductService.deleteProduct(productId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await ProductService.getAllProduct(
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

const getDetailProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: "Err",
        message: "The productId is required!!",
      });
    }
    const respone = await ProductService.getDetailProduct(productId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
};