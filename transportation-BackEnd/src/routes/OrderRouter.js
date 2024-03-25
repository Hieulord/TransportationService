const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const uploadMiddleware = require("../middleware/uploadMiddleware");

router.post(
  "/create",
  OrderController.createOrder
);

router.put(
  "/update/:id",
  OrderController.updateOrder
);

router.delete("/delete/:id", OrderController.deleteOrder);
router.get("/getAllOrder", OrderController.getAllOrder);
router.get("/getDetailOrder/:id", OrderController.getDetailOrder);

module.exports = router;
