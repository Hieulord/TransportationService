import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";
import { start } from "repl";

interface OrderData {
  _id: string;
  orderCode: string;
  wayCode: string;
  receivingParty: string; // Thay đổi kiểu dữ liệu của trường image
  sendingParty: string;
  deliveryAddress: string;
  price: number;
  moneyCollected: number;
  area: string;
}

const Order: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [services, setServices] = useState<OrderData[]>([]);

  const [orderCode, setOrderCode] = useState("");
  const [wayCode, setWayCode] = useState("");
  const [receivingParty, setReceivingParty] = useState("");
  const [sendingParty, setSendingParty] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [price, setPrice] = useState("");
  const [moneyCollected, setMoneyCollected] = useState("");
  const [area, setArea] = useState("");

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Hàm lấy dữ liệu cho trang hiện tại
  const getCurrentItems = () => {
    var startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterServices.slice(startIndex, endIndex); //Phương thức slice dùng để cắt mảng
  };

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Sort để lưu trữ dạng sắp xếp hiện tại
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");

  const handleSort = (sortBy: keyof OrderData) => {
    const sortedServices = [...services]; // Tạo một bản sao của danh sách dịch vụ
    sortedServices.sort((a, b) => {
      if (sortType === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1; // Sắp xếp theo asc
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1; // Sắp xếp theo desc
      }
    });
    setServices(sortedServices); // Cập nhật danh sách dịch vụ với thứ tự đã sắp xếp
    setSortType(sortType === "asc" ? "desc" : "asc"); // Đảo ngược loại sắp xếp
  };

  // Search Service
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const searchServices = services.filter(
    (service) =>
      service.orderCode.toLowerCase().includes(searchKeyword.toLowerCase()) // Thay đổi từ "name" thành "orderCode"
  );

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(e.target.value);
  }

  //Filter
  const [filterType, setFilterType] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState<number | null>(null);

  //Hàm kiểm tra bộ lọc
  const filterServices = searchServices.filter((service) => {
    // Kiểm tra nếu không có bộ lọc hoặc dịch vụ không phù hợp với bộ lọc
    if (
      (filterType === "" ||
        service.area.toLowerCase() === filterType.toLowerCase()) && //toLowerCase là chuyển đổi chuỗi thành chữ thường
      (filterPrice === null || service.price === filterPrice)
    ) {
      return true;
    }
    return false;
  });

  //Lọc theo khu vực
  const handleTypeFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const area = e.target.value;
    setFilterType(area);
  };

  //Lọc theo giá tiền
  const handlePriceFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value === "" ? null : parseInt(e.target.value);
    setFilterPrice(price);
  };

  //Edit
  const [editFormData, setEditFormData] = useState<OrderData>({
    _id: "",
    orderCode: "",
    wayCode: "",
    receivingParty: "",
    sendingParty: "",
    deliveryAddress: "",
    price: 0,
    moneyCollected: 800,
    area: "",
  });

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const isDuplicateOrderCode = checkDuplicateServiceCode(
        editFormData.orderCode
      );
      const isDuplicateWayCode = checkDuplicateServiceCode(
        editFormData.wayCode
      );

      if (isDuplicateOrderCode || isDuplicateWayCode) {
        alert("Mã đơn hàng hoặc vận đơn đã tồn tại");
        return;
      }

      const response = await axios.put(
        `http://localhost:4000/api/order/update/${editFormData._id}`,
        editFormData
      );

      if (response.status === 200) {
        console.log("Chỉnh sửa thành công:", response.data);
        setShowModal(false); // Ẩn modal sau khi chỉnh sửa thành công
        fetchData(); // Lấy lại dữ liệu từ API để cập nhật danh sách
      } else {
        console.error("Lỗi khi chỉnh sửa đơn hàng:", response.statusText);
        alert("Đã xảy ra lỗi khi chỉnh sửa đơn hàng");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      alert("Đã xảy ra lỗi khi thực hiện yêu cầu chỉnh sửa");
    }
  };

  const handleEdit = (service: OrderData) => {
    setEditFormData(service); // Cập nhật dữ liệu của editFormData
    setShowModal(true); // Hiển thị modal chỉnh sửa
  };

  const checkDuplicateServiceCode = (code: string): boolean => {
    // Kiểm tra nếu services không được định nghĩa hoặc là một mảng rỗng
    if (!services || services.length === 0) {
      return false; // Trả về false vì không có dữ liệu để kiểm tra trùng lặp
    }

    // Kiểm tra xem serviceCode có tồn tại trong danh sách dịch vụ hay không
    return services.some(
      (service) => service.orderCode === code || service.wayCode === code
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Kiểm tra serviceCode có trùng không
      if (
        checkDuplicateServiceCode(orderCode) ||
        checkDuplicateServiceCode(wayCode)
      ) {
        alert("Mã đơn hàng hoặc vận đơn đã tồn tại");
        return;
      }

      // Tạo object chứa dữ liệu để gửi đi
      const requestData = {
        orderCode,
        wayCode,
        receivingParty,
        sendingParty,
        deliveryAddress,
        price: parseFloat(price),
        moneyCollected: parseFloat(moneyCollected),
        area,
      };

      // Thực hiện gửi biểu mẫu với dữ liệu JSON
      const response = await fetch("http://localhost:4000/api/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi gửi biểu mẫu");
      }

      console.log(response);
      // Xóa các trường sau khi gửi thành công
      setOrderCode("");
      setWayCode("");
      setReceivingParty("");
      setSendingParty("");
      setDeliveryAddress("");
      setPrice("");
      setMoneyCollected("");
      setArea("");
      setShowModal(false);
      fetchData();
      alert("Dữ liệu đã được lưu");
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      alert("Đã xảy ra lỗi khi gửi biểu mẫu");
    }
  };

  //In dữ liệu ra bảng
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/order/getAllOrder"
      );
      console.log("chay");
      setServices(res.data.data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  // Hàm xóa
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

  useEffect(() => {
    fetchData();
  }, []);

  const closeModal = () => {
    setIsEditing(false);
    setShowModal(false);
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
              <div className="d-inline-flex">
                <div>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Thêm đơn hàng
                  </button>
                </div>
                <div className="ms-3 mt-1">
                  <input
                    className="border border-2 rounded-2"
                    type="text"
                    style={{ width: "300px" }}
                    placeholder="Tìm kiếm mã ĐH..."
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="ms-3 mt-2">
                  <label htmlFor="typeFilter">Lọc theo khu vực:</label>
                  <select
                    className="ms-3 border border-2 rounded-2"
                    style={{ width: "130px" }}
                    id="typeFilter"
                    value={filterType}
                    onChange={handleTypeFilterChange}
                  >
                    <option value="">Tất cả</option>
                    <option value="Khu vực A">Khu Vực A</option>
                    <option value="Khu vực B">Khu Vực B</option>
                    <option value="Khu vực C">Khu Vực C</option>
                    <option value="Khu vực D">Khu vực D</option>
                  </select>
                </div>
                <div className="ms-5 mt-1">
                  <label htmlFor="priceFilter">Lọc theo giá tiền:</label>
                  <input
                    type="number"
                    className="ms-3 border border-2 rounded-2"
                    id="priceFilter"
                    value={filterPrice || ""}
                    onChange={handlePriceFilterChange}
                  />
                </div>
              </div>
              <table className="table mt-3">
                <thead>
                  <tr className="dataFields">
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("orderCode")}
                    >
                      Mã đơn hàng <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("wayCode")}
                    >
                      Mã vận đơn <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("receivingParty")}
                    >
                      Bên nhận <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("sendingParty")}
                    >
                      Bên gửi <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("deliveryAddress")}
                    >
                      Địa chỉ giao hàng <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("price")}
                    >
                      Giá dịch vụ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("moneyCollected")}
                    >
                      Tiền thu hộ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("area")}
                    >
                      Khu vực <TbArrowsSort />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentItems().map((service) => (
                    <tr key={service._id}>
                      <td>{service.orderCode}</td>
                      <td>{service.wayCode}</td>
                      <td>{service.receivingParty}</td>
                      <td>{service.sendingParty}</td>
                      <td>{service.deliveryAddress}</td>
                      <td>{service.price}</td>
                      <td>{service.moneyCollected}</td>
                      <td>{service.area}</td>
                      <td>
                        <button
                          className="border border-0 bg-transparent"
                          onClick={() => handleEdit(service)}
                        >
                          <RiEditLine />
                        </button>
                      </td>
                      <td>
                        <button
                          className="border border-0 bg-transparent"
                          onClick={() => handleDelete(String(service._id))}
                        >
                          <RiDeleteBin6Line />
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
                  // disabled={
                  //   currentPage ===
                  //   Math.ceil(filterServices.length / itemsPerPage)
                  // }
                >
                  <BiRightArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal chỉnh sửa hoặc thêm mới */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thêm sản phẩm
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="orderCode">Mã đơn hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="orderCode"
                      value={orderCode}
                      onChange={(e) => setOrderCode(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="wayCode">Mã vận đơn:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="wayCode"
                      value={wayCode}
                      onChange={(e) => setWayCode(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="receivingParty">Bên nhận:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="receivingParty"
                      value={receivingParty}
                      onChange={(e) => setReceivingParty(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sendingParty">Bên gửi:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sendingParty"
                      value={sendingParty}
                      onChange={(e) => setSendingParty(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="deliveryAddress">Địa chỉ giao hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="deliveryAddress"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Giá dịch vụ:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="moneyCollected">Tiền thu hộ:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="moneyCollected"
                      value={moneyCollected}
                      onChange={(e) => setMoneyCollected(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="area">Khu vực:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Thêm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Form edit sản phẩm */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="editModal"
        tabIndex={-1}
        aria-labelledby="editModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Sửa sản phẩm
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleEditSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="orderCode">Mã đơn hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="orderCode"
                      value={editFormData.orderCode}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          orderCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="wayCode">Mã vận đơn:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="wayCode"
                      value={editFormData.wayCode}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          wayCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="receivingParty">Bên nhận:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="receivingParty"
                      value={editFormData.receivingParty}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          receivingParty: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sendingParty">Bên gửi:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="sendingParty"
                      value={editFormData.sendingParty}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          sendingParty: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="deliveryAddress">Địa chỉ giao hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="deliveryAddress"
                      value={editFormData.deliveryAddress}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          deliveryAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Giá dịch vụ:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      value={editFormData.price}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="moneyCollected">Tiền thu hộ:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="moneyCollected"
                      value={editFormData.moneyCollected}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          moneyCollected: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="area">Khu vực:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="area"
                      value={editFormData.area}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          area: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Sửa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Hàm kiểm tra ẩn hiện modal */}
      <div
        className={`modal-backdrop fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      ></div>
    </>
  );
};

export default Order;
