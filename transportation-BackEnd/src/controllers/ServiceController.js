const ProductService = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    // const { serviceCode, name, type, evaluate, price, description } =
    //   req.body;
    // if (!serviceCode || !name || !type || !evaluate || !price || !description) {
    //   return res.status(200).json({
    //     status: "Err",
    //     message: "The input is required!!",
    //   });
    // }
    const respone = await ProductService.createProduct(req);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
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