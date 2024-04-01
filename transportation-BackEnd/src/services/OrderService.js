const Order = require("../models/OrderModel");
const bcrypt = require("bcrypt");

const createOrder = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Order.findOne({
        orderCode: req.body.orderCode,
        wayCode: req.body.wayCode,
      });
      if (checkProduct !== null) {
        resolve({
          status: "OK",
          message: "The service code of product already exists.",
        });
      } else {
        const addProduct = await Order.create({
          orderCode: req.body.orderCode,
          wayCode: req.body.wayCode,
          receivingParty: req.body.receivingParty,
          sendingParty: req.body.sendingParty,
          deliveryAddress: req.body.deliveryAddress,
          price: req.body.price,
          moneyCollected: req.body.moneyCollected,
          area: req.body.area,
        });
        console.log("Tạo sản phẩm ");
        console.log("Lưu sản phẩm");
        if (addProduct) {
          resolve({
            status: "OK",
            message: "SUCCESS",
            data: addProduct,
          });
          console.log("Ok con dê");
        } else {
          console.log("bug kìa");
          reject("Failed to create product.");
        }
      }
    } catch (error) {
      console.log("Lỗi Kìa Thằng Lỏ");
      reject(error);
    }
  });
};

const updateOrder = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOrder = await Order.findById(id);
      if (!checkOrder) {
        resolve({
          status: "OK",
          message: "The Order is not defined!!",
        });
      }
      const updateOrder = await Order.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        staus: "OK",
        message: "SUCCESS",
        data: updateOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteOrder = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOrder = await Order.findById(id);
      if (!checkOrder) {
        resolve({
          status: "OK",
          message: "The Order is not defined!!",
        });
      }
      await Order.findByIdAndDelete(id);
      resolve({
        staus: "OK",
        message: "Delete Order success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllOrder = (sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = Order.find();

      if (filter && filter.length === 2) {
        const [key, value] = filter;
        query = query.where(key, { $regex: value });
      }

      if (sort && sort.length === 2) {
        const [direction, field] = sort;
        query = query.sort({ [field]: direction === "asc" ? 1 : -1 });
      }

      const allProduct = await query;

      resolve({
        status: "OK",
        message: "Success",
        data: allProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailOrder = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.findById(id);
      if (!order) {
        resolve({
          status: "OK",
          message: "The order is not defined!!",
        });
      }
      resolve({
        staus: "OK",
        message: "Success",
        data: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getDetailOrder,
};
