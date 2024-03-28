const StaffType = require("../models/StaffTypeModel");
const bcrypt = require("bcrypt");

const createStaffType = (req) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkStaffType = await StaffType.findOne({
          staffTypeCode: req.body.staffTypeCode,
        });
        if (checkStaffType !== null) {
          resolve({
            status: "OK",
            message: "The staff type code already exists.",
          });
        } else {
          const newStaffType = new StaffType({
            staffTypeCode: req.body.staffTypeCode,
            nameStaff: req.body.nameStaff,
          });
          const saveStaffType = await newStaffType.save();
          console.log("Tạo loại nhân viên mới ");
          console.log("Lưu loại nhân viên mới");
          if (saveStaffType) {
            resolve({
              status: "OK",
              message: "SUCCESS",
              data: saveStaffType,
            });
            console.log("Thành công");
          } else {
            console.log("Lỗi khi lưu loại nhân viên mới");
            reject("Failed to save service type.");
          }
        }
      } catch (error) {
        console.log("Lỗi khi tạo loại nhân viên mới:", error);
        reject(error);
      }
    });
};

const updateStaffType = (id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkStaffType = await StaffType.findById(id);
        if (!checkStaffType) {
          resolve({
            status: "OK",
            message: "The Staff Type is not defined!!",
          });
        }
        const updateStaffTypes = await StaffType.findByIdAndUpdate(id, data, { new: true });
        resolve({
          staus: "OK",
          message: "SUCCESS",
          data: updateStaffTypes,
        });
      } catch (e) {
        reject(e);
      }
    });
};

const deleteStaffType = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStaffType = await StaffType.findById(id);
      if (!checkStaffType) {
        resolve({
          status: "OK",
          message: "The Staff Type is not defined!!",
        });
      }
      await StaffType.findByIdAndDelete(id);
      resolve({
        staus: "OK",
        message: "Delete Staff Type success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllStaffType = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = StaffType.find();

      if (filter && filter.length === 2) {
        const [key, value] = filter;
        query = query.where(key, { $regex: value });
      }

      if (sort && sort.length === 2) {
        const [direction, field] = sort;
        query = query.sort({ [field]: direction === "asc" ? 1 : -1 });
      }

      const totalProduct = await StaffType.countDocuments();
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

const getDetailStaffType = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await StaffType.findById(id);
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
    createStaffType,
    updateStaffType,
    deleteStaffType,
    getAllStaffType,
    getDetailStaffType
  };