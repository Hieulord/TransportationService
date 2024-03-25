const Order = require("../models/OrderModel");
const bcrypt = require("bcrypt");

const createOrder = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOrder = await Order.findOne({
        orderCode: req.body.orderCode,
        wayCode: req.body.wayCode,
      });
      if (checkOrder !== null) {
        resolve({
          status: "OK",
          message: "The service type code already exists.",
        });
      } else {
        const newOrder = new Order({
          orderCode: req.body.orderCode,
          wayCode: req.body.wayCode,
          receivingParty: req.body.receivingParty,
          sendingParty: req.body.sendingParty,
          deliveryAddress: req.body.deliveryAddress,
          price: req.body.price,
          moneyCollected: req.body.moneyCollected,
          area: req.body.area,
        });
        const saveOder = await newOrder.save();
        console.log("Tạo đơn hàng mới ");
        console.log("Lưu đơn hàng mới");
        if (saveOder) {
          resolve({
            status: "OK",
            message: "SUCCESS",
            data: saveOder,
          });
          console.log("Thành công");
        } else {
          console.log("Lỗi khi lưu đơn hàng mới");
          reject("Failed to save service type.");
        }
      }
    } catch (error) {
      console.log("Lỗi khi tạo đơn hàng mới:", error);
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

const getAllOrder = (limit, page, sort, filter) => {
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

      const totalProduct = await Order.countDocuments();
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
