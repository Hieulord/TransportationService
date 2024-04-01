const Client = require("../models/ClientModel");
const bcrypt = require("bcrypt");

const createClient = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkClient = await Client.findOne({
        clientCode: req.body.clientCode,
      });
      if (checkClient !== null) {
        resolve({
          status: "OK",
          message: "The client code of client already exists.",
        });
      } else {
        const addClient = await Client.create({
          clientCode: req.body.clientCode,
          nameClient: req.body.nameClient,
          genderClient: req.body.genderClient,
          dateClient: req.body.dateClient,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
        });
        console.log("Tạo khách hàng ");
        console.log("Lưu khách hàng");
        if (addClient) {
          resolve({
            status: "OK",
            message: "SUCCESS",
            data: addClient,
          });
          console.log("Ok con dê");
        } else {
          console.log("Bug kìa");
          reject("Failed to create product.");
        }
      }
    } catch (error) {
      console.log("Lỗi Kìa Thằng Lỏ");
      reject(error);
    }
  });
};

const updateClient = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkClient = await Client.findById(id);
      if (!checkClient) {
        resolve({
          status: "OK",
          message: "The Client is not defined!!",
        });
      }
      const updateClient = await Client.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        staus: "OK",
        message: "SUCCESS",
        data: updateClient,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteClient = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkClient = await Client.findById(id);
      if (!checkClient) {
        resolve({
          status: "OK",
          message: "The Client is not defined!!",
        });
      }
      await Client.findByIdAndDelete(id);
      resolve({
        staus: "OK",
        message: "Delete Client success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllClient = (sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = Client.find();

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

const getDetailClient = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await Client.findById(id);
      if (!client) {
        resolve({
          status: "OK",
          message: "The client is not defined!!",
        });
      }
      resolve({
        staus: "OK",
        message: "Success",
        data: client,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createClient,
  updateClient,
  deleteClient,
  getAllClient,
  getDetailClient,
};
