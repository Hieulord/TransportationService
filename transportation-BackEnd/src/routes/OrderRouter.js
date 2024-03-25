const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const uploadMiddleware = require("../middleware/uploadMiddleware");

router.post(
  "/create",
  OrderController.createOrder
);
// router.put(
//   "/update/:id",
//   ServiceTypeController.updateServiceType
// );

// router.delete("/delete/:id", ServiceTypeController.delteServiceType);
// router.get("/getAllServiceType", ServiceTypeController.getAllServiceType);
// router.get("/getDetailServiceType/:id", ServiceTypeController.getDetailServiceType);

module.exports = router;
