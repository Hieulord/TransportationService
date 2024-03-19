const Service = require("../models/ServiceModel");
const bcrypt = require("bcrypt");

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { serviceCode, name, image, type, evaluate, price, description } =
      newProduct;
    try {
      const checkProduct = await Service.findOne({
        serviceCode: serviceCode,
      });
      if (checkProduct !== null) {
        resolve({
          status: "OK",
          message: "The service code of product is already",
        });
      }
      const addProduct = await Service.create({
        serviceCode,
        name,
        image,
        type,
        evaluate,
        price,
        description,
      });
      if (addProduct) {
        resolve({
          staus: "OK",
          message: "SUCCESS",
          data: addProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Service.findById(id);
      if (!checkProduct) {
        resolve({
          status: "OK",
          message: "The product is not defined!!",
        });
      }
      const update = await Service.findByIdAndUpdate(id, data, { new: true });
      resolve({
        staus: "OK",
        message: "SUCCESS",
        data: update,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Service.findById(id);
      if (!checkProduct) {
        resolve({
          status: "OK",
          message: "The user is not defined!!",
        });
      }
      await Service.findByIdAndDelete(id);
      resolve({
        staus: "OK",
        message: "Delete user success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProduct = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = Service.find();

      if (filter && filter.length === 2) {
        const [key, value] = filter;
        query = query.where(key, { '$regex': value });
      }

      if (sort && sort.length === 2) {
        const [direction, field] = sort;
        query = query.sort({ [field]: direction === 'asc' ? 1 : -1 });
      }

      const totalProduct = await Service.countDocuments();
      const allProduct = await query.limit(limit).skip(page * limit);

      resolve({
        status: "OK",
        message: "Success",
        data: allProduct,
        total: totalProduct,
        pageProduct: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Service.findById(id);
      if (!product) {
        resolve({
          status: "OK",
          message: "The product is not defined!!",
        });
      }
      resolve({
        staus: "OK",
        message: "Success",
        data: product,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
};