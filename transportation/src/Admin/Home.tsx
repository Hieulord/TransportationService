import avatarImage from "../Avatar/avatar-11.jpg";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";
const Home = () => {
  return (
    <>
      <header
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#0b3d66", height: "90px" }}
      >
        <h1>𝕎𝕖𝕝𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝔸𝕕𝕞𝕚𝕟 𝕂𝕒𝕚𝕥𝕚𝕠𝕟.𝕁𝕜𝕖𝕪𝕒𝕟-𝕌ℕ𝕚𝕧𝕖𝕣 </h1>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-2 d-flex justify-content align-items-start mt-2"
            // style={{ backgroundColor: "#0b3d66" }}
          >
            <NavAdmin />
          </div>
          <div className="col-10">
            <div className="container">
              <h1 className="mt-3 mb-3 text-center">xɪɴ ᴄʜàᴏ ǫᴜảɴ ᴛʀị ᴠɪêɴ</h1>
              <div className="d-inline-flex">
                <div>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Thêm sản phẩm
                  </button>
                </div>
                <div className="ms-3 mt-1">
                  <input
                    className="border border-2 rounded-2"
                    type="text"
                    style={{ width: "300px" }}
                    placeholder="Tìm kiếm..."
                  />
                </div>
                <div className="ms-3 mt-2">
                  <label htmlFor="typeFilter">Lọc theo loại dịch vụ:</label>
                  <select
                    className="ms-3 border border-2 rounded-2"
                    style={{ width: "130px" }}
                    id="typeFilter"
                  >
                    <option value="">Tất cả</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Sea">Sea</option>
                    <option value="Rail">Rail</option>
                    <option value="Airlife">Airlife</option>
                  </select>
                </div>
                <div className="ms-5 mt-1">
                  <label htmlFor="priceFilter">Lọc theo giá tiền:</label>
                  <input
                    type="number"
                    className="ms-3 border border-2 rounded-2"
                    id="priceFilter"
                  />
                </div>
              </div>
              <table className="table mt-3">
                <thead>
                  <tr className="dataFields">
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => "serviceCode"}
                    >
                      Mã dịch vụ <TbArrowsSort />
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => "name"}>
                      Tên dịch vụ <TbArrowsSort />
                    </th>
                    <th>Hình ảnh</th>
                    <th style={{ cursor: "pointer" }} onClick={() => "type"}>
                      Loại dịch vụ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => "evaluate"}
                    >
                      Đánh giá <TbArrowsSort />
                    </th>
                    <th style={{ cursor: "pointer" }} onClick={() => "price"}>
                      Giá tiền <TbArrowsSort />
                    </th>
                    <th>Mô tả</th>
                    <th></th>
                  </tr>
                </thead>
              </table>

              <div className="pagination mt-3 d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
