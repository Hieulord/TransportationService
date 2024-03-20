const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/ServiceController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/create", ServiceController.createProduct);
router.put("/update/:id", ServiceController.updateProduct);
router.get("/getDetail/:id", ServiceController.getDetailProduct);
router.delete("/delete/:id", ServiceController.deleteProduct);
router.get("/getAllProduct", ServiceController.getAllProduct);

module.exports = router;
