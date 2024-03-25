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

module.exports = {
    createOrder,
  };