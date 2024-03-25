import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";

interface OrderData {
  _id: string;
  orderCode: string;
  wayCode: string;
  receivingParty: string;
  sendingParty: string;
  deliveryAddress: string;
  price: number;
  moneyCollected: number;
  area: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filterArea, setFilterArea] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<OrderData>({
    _id: "",
    orderCode: "",
    wayCode: "",
    receivingParty: "",
    sendingParty: "",
    deliveryAddress: "",
    price: 0,
    moneyCollected: 0,
    area: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/order/getAllOrder"
      );
      setOrders(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSort = (sortBy: keyof OrderData) => {
    const sortedOrders = [...orders];
    sortedOrders.sort((a, b) => {
      if (sortType === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    setOrders(sortedOrders);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleFilterAreaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterArea(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getCurrentItems = (): OrderData[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orders
      .filter((order) =>
        order.area.toLowerCase().includes(filterArea.toLowerCase())
      )
      .filter((order) =>
        order.orderCode.toLowerCase().includes(searchKeyword.toLowerCase())
      )
      .slice(startIndex, endIndex);
  };

  const handleEdit = (order: OrderData) => {
    setEditFormData(order);
    setShowModal(true);
  };

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        `http://localhost:4000/api/order/update/${editFormData._id}`,
        editFormData
      );
      console.log(result);
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  // Hàm xóa đơn hàng
  const handleDelete = async (id: string) => {
    try {
      if (confirmDelete()) {
        const res = await axios.delete(
          `http://localhost:4000/api/order/delete/${id}`
        );
        console.log(res);
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Hàm xác nhận xóa
  function confirmDelete() {
    return window.confirm("Bạn có muốn xóa không??");
  }

  const closeModal = () => {
    setShowModal(false);
    setEditFormData({
      _id: "",
      orderCode: "",
      wayCode: "",
      receivingParty: "",
      sendingParty: "",
      deliveryAddress: "",
      price: 0,
      moneyCollected: 0,
      area: "",
    });
  };

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
              <h2 className="mt-3 mb-3">Danh sách đơn hàng</h2>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Thêm đơn hàng
              </button>
              <div className="mb-3">
                <input
                  type="text"
                  className=""
                  placeholder="Tìm kiếm..."
                  value={searchKeyword}
                  onChange={handleSearchInputChange}
                />
                <select
                  className=""
                  value={filterArea}
                  onChange={handleFilterAreaChange}
                >
                  <option value="">Tất cả</option>
                  <option value="Area1">Khu vực 1</option>
                  <option value="Area2">Khu vực 2</option>
                  <option value="Area3">Khu vực 3</option>
                </select>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort("orderCode")}>Order Code</th>
                    <th onClick={() => handleSort("wayCode")}>Way Code</th>
                    <th onClick={() => handleSort("receivingParty")}>
                      Receiving Party
                    </th>
                    <th onClick={() => handleSort("sendingParty")}>
                      Sending Party
                    </th>
                    <th onClick={() => handleSort("deliveryAddress")}>
                      Delivery Address
                    </th>
                    <th onClick={() => handleSort("price")}>Price</th>
                    <th onClick={() => handleSort("moneyCollected")}>
                      Money Collected
                    </th>
                    <th onClick={() => handleSort("area")}>Area</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentItems().map((order) => (
                    <tr key={order._id}>
                      <td>{order.orderCode}</td>
                      <td>{order.wayCode}</td>
                      <td>{order.receivingParty}</td>
                      <td>{order.sendingParty}</td>
                      <td>{order.deliveryAddress}</td>
                      <td>{order.price}</td>
                      <td>{order.moneyCollected}</td>
                      <td>{order.area}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => handleEdit(order)}
                        >
                          Sửa
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(order._id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination mt-3 d-flex justify-content-center">
                <button
                  className="btn btn-light me-2 border border-1"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <BiLeftArrow />
                </button>
                <button
                  className="btn btn-light me-2 border border-1"
                  onClick={() => handlePageChange(currentPage)}
                  disabled
                >
                  {currentPage}
                </button>
                <button
                  className="btn btn-light border border-1"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(orders.length / itemsPerPage)
                  }
                >
                  <BiRightArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal Form Sửa đơn hàng */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="editModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sửa đơn hàng
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label htmlFor="orderCode" className="form-label">
                    Order Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="orderCode"
                    value={editFormData.orderCode}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        orderCode: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Thêm các trường còn lại ở đây */}
                <button type="submit" className="btn btn-primary">
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
