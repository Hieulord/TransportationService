const express = require("express");
const router = express.Router();
const ServiceTypeController = require("../controllers/ServiceTypeController");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const uploadMiddleware = require("../middleware/uploadMiddleware");

router.post(
  "/create",
  ServiceTypeController.createServiceType
);
router.put(
  "/update/:id",
  ServiceTypeController.updateServiceType
);

router.delete("/delete/:id", ServiceTypeController.delteServiceType);
router.get("/getAllServiceType", ServiceTypeController.getAllServiceType);
router.get("/getDetailServiceType/:id", ServiceTypeController.getDetailServiceType);

module.exports = router;
