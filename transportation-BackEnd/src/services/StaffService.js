const Staff = require("../models/StaffModel");
const bcrypt = require("bcrypt");

const createStaff = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStaff = await Staff.findOne({
        staffCode: req.body.staffCode,
      });
      if (checkStaff !== null) {
        resolve({
          status: "OK",
          message: "The staff code of product already exists.",
        });
      } else {
        const addStaff = await Staff.create({
          staffCode: req.body.staffCode,
          nameStaff: req.body.nameStaff,
          gender: req.body.gender,
          dateStaff: req.body.dateStaff,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          position: req.body.position,
          area: req.body.area,
        });
        console.log("Tạo nhân viên ");
        console.log("Lưu nhân viên");
        if (addStaff) {
          resolve({
            status: "OK",
            message: "SUCCESS",
            data: addStaff,
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

const updateStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStaff = await Staff.findById(id);
      if (!checkStaff) {
        resolve({
          status: "OK",
          message: "The Staff is not defined!!",
        });
      }
      const updateStaffs = await Staff.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        staus: "OK",
        message: "SUCCESS",
        data: updateStaffs,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteStaff = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStaff = await Staff.findById(id);
      if (!checkStaff) {
        resolve({
          status: "OK",
          message: "The Staff is not defined!!",
        });
      }
      await Staff.findByIdAndDelete(id);
      resolve({
        staus: "OK",
        message: "Delete Staff success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllStaff = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = Staff.find();

      if (filter && filter.length === 2) {
        const [key, value] = filter;
        query = query.where(key, { $regex: value });
      }

      if (sort && sort.length === 2) {
        const [direction, field] = sort;
        query = query.sort({ [field]: direction === "asc" ? 1 : -1 });
      }

      const totalProduct = await Staff.countDocuments();
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

const getDetailStaff = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = await Staff.findById(id);
      if (!staff) {
        resolve({
          status: "OK",
          message: "The staff is not defined!!",
        });
      }
      resolve({
        staus: "OK",
        message: "Success",
        data: staff,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createStaff,
  updateStaff,
  deleteStaff,
  getAllStaff,
  getDetailStaff,
};
