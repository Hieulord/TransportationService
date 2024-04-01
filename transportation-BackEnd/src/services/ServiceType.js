const ServiceType = require("../models/ServiceTypeModel");
const bcrypt = require("bcrypt");

const createServiceType = (req) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkServiceType = await ServiceType.findOne({
          serviceTypeCode: req.body.serviceTypeCode,
        });
        if (checkServiceType !== null) {
          resolve({
            status: "OK",
            message: "The service type code already exists.",
          });
        } else {
          const newServiceType = new ServiceType({
            serviceTypeCode: req.body.serviceTypeCode,
            nameType: req.body.nameType,
          });
          const savedServiceType = await newServiceType.save();
          console.log("Tạo dịch vụ loại mới ");
          console.log("Lưu dịch vụ loại mới");
          if (savedServiceType) {
            resolve({
              status: "OK",
              message: "SUCCESS",
              data: savedServiceType,
            });
            console.log("Thành công");
          } else {
            console.log("Lỗi khi lưu dịch vụ loại mới");
            reject("Failed to save service type.");
          }
        }
      } catch (error) {
        console.log("Lỗi khi tạo dịch vụ loại mới:", error);
        reject(error);
      }
    });
};

const updateServiceType = (id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkServiceType = await ServiceType.findById(id);
        if (!checkServiceType) {
          resolve({
            status: "OK",
            message: "The Service Type is not defined!!",
          });
        }
        const updateServiceType = await ServiceType.findByIdAndUpdate(id, data, { new: true });
        resolve({
          staus: "OK",
          message: "SUCCESS",
          data: updateServiceType,
        });
      } catch (e) {
        reject(e);
      }
    });
};

const delteServiceType = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkServiceType = await ServiceType.findById(id);
      if (!checkServiceType) {
        resolve({
          status: "OK",
          message: "The Service Type is not defined!!",
        });
      }
      await ServiceType.findByIdAndDelete(id);
      resolve({
        staus: "OK",
        message: "Delete Service Type success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllServiceType = (sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = ServiceType.find();

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

const getDetailServiceType = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await ServiceType.findById(id);
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
    createServiceType,
    updateServiceType,
    delteServiceType,
    getAllServiceType,
    getDetailServiceType
  };