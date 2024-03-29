const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Chỉ cho phép truy cập từ nguồn cụ thể: http://localhost:3000
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
const imagesDirectoryPath = path.join(__dirname, "./images");

// Sử dụng middleware express.static để phục vụ các tệp tin tĩnh từ thư mục images
app.use("/images", express.static(imagesDirectoryPath));

routes(app);

mongoose
  .connect(`${process.env.MONG_DB}`)
  .then(() => {
    console.log("Connect Db success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server Dtb: " + port);
});
