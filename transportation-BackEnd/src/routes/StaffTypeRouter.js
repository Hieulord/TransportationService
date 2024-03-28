const express = require("express");
const router = express.Router();
const StaffTypeController = require("../controllers/StaffTypeController");

router.post(
    "/create",
    StaffTypeController.createStaffType
  );
  router.put(
    "/update/:id",
    StaffTypeController.updateStaffType
  );
  
  router.delete("/delete/:id", StaffTypeController.deleteStaffType);
  router.get("/getAllStaffType", StaffTypeController.getAllStaffType);
  router.get("/getDetailStaffType/:id", StaffTypeController.getDetailStaffType);
  
  module.exports = router;