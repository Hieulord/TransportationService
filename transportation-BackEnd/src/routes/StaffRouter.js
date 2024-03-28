const express = require("express");
const router = express.Router();
const StaffController = require("../controllers/StaffController");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const uploadMiddleware = require("../middleware/uploadMiddleware");

router.post(
  "/create",
  StaffController.createStaff
);

router.put(
  "/update/:id",
  StaffController.updateStaff
);

router.delete("/delete/:id", StaffController.deleteStaff);
router.get("/getAllStaff", StaffController.getAllStaff);
router.get("/getDetailStaff/:id", StaffController.getDetailStaff);

module.exports = router;
