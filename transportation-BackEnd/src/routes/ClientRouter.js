const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/ClientController");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const uploadMiddleware = require("../middleware/uploadMiddleware");

router.post(
  "/create",
  ClientController.createClient
);

router.put(
  "/update/:id",
  ClientController.updateClient
);

router.delete("/delete/:id", ClientController.deleteClient);
router.get("/getAllClient", ClientController.getAllClient);
router.get("/getDetailClient/:id", ClientController.getDetailClient);

module.exports = router;
