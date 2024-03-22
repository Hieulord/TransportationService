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

// router.get("/getDetail/:id", ServiceTypeController.getDetailProduct);
// router.delete("/delete/:id", ServiceTypeController.deleteProduct);
// router.get("/getAllProduct", ServiceTypeController.getAllProduct);

module.exports = router;
