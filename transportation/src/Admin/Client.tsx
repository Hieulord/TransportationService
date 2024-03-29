import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";

interface StaffData {
  _id: string;
  clientCode: string;
  nameClient: string;
  genderClient: string; // Thay đổi kiểu dữ liệu của trường image
  dateClient: string;
  email: string;
  phone: string;
  address: string;
}

const Client: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [services, setServices] = useState<StaffData[]>([]);

  const [clientCode, setClientCode] = useState("");
  const [nameClient, setNameClient] = useState("");
  const [genderClient, setGenderClient] = useState("");
  const [dateClient, setDateClient] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Hàm lấy dữ liệu cho trang hiện tại
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterServices.slice(startIndex, endIndex); //Phương thức slice dùng để cắt mảng
  };

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Sort để lưu trữ dạng sắp xếp hiện tại
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");

  const handleSort = (sortBy: keyof StaffData) => {
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
      service.clientCode.toLowerCase().includes(searchKeyword.toLowerCase()) // Thay đổi từ "name" thành "clientCode"
  );

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(e.target.value);
  }

  //Filter
  const [filterType, setFilterType] = useState<string>("");
  const [filterphone, setFilterphone] = useState<string>("");

  //Hàm kiểm tra bộ lọc
  const filterServices = searchServices.filter((service) => {
    // Kiểm tra nếu không có bộ lọc hoặc dịch vụ không phù hợp với bộ lọc
    if (
      (filterType === "" ||
        service.genderClient.toLowerCase() === filterType.toLowerCase()) && //toLowerCase là chuyển đổi chuỗi thành chữ thường
      (filterphone === "" ||
        service.address.toLowerCase() === filterphone.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  //Lọc theo loại dịch vụ
  const handleTypeFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const genderClient = e.target.value;
    setFilterType(genderClient);
  };

  //Lọc theo số điện thoại
  const handlephoneFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setFilterphone(address);
  };

  //Edit
  const [editFormData, setEditFormData] = useState<StaffData>({
    _id: "",
    clientCode: "",
    nameClient: "",
    genderClient: "",
    dateClient: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const isDuplicateclientCode = checkDuplicateServiceCode(
        editFormData.clientCode
      );

      if (isDuplicateclientCode) {
        alert("Mã khách hàng đã tồn tại");
        return;
      }

      const response = await axios.put(
        `http://localhost:4000/api/client/update/${editFormData._id}`,
        editFormData
      );

      if (response.status === 200) {
        console.log("Chỉnh sửa thành công:", response.data);
        setShowModal(false); // Ẩn modal sau khi chỉnh sửa thành công
        fetchData(); // Lấy lại dữ liệu từ API để cập nhật danh sách
      } else {
        console.error("Lỗi khi chỉnh sửa khách hàng:", response.statusText);
        alert("Đã xảy ra lỗi khi chỉnh sửa khách hàng");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      alert("Đã xảy ra lỗi khi thực hiện yêu cầu chỉnh sửa");
    }
  };

  const handleEdit = (service: StaffData) => {
    setEditFormData(service); // Cập nhật dữ liệu của editFormData
    setShowModal(true); // Hiển thị modal chỉnh sửa
  };

  const checkDuplicateServiceCode = (code: string): boolean => {
    // Kiểm tra nếu services không được định nghĩa hoặc là một mảng rỗng
    if (!services || services.length === 0) {
      return false; // Trả về false vì không có dữ liệu để kiểm tra trùng lặp
    }

    // Kiểm tra xem serviceCode có tồn tại trong danh sách dịch vụ hay không
    return services.some((service) => service.clientCode === code);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Kiểm tra serviceCode có trùng không
      if (checkDuplicateServiceCode(clientCode)) {
        alert("Mã khách hàng đã tồn tại");
        return;
      }

      // Tạo object chứa dữ liệu để gửi đi
      const requestData = {
        clientCode,
        nameClient,
        genderClient,
        dateClient,
        email,
        phone,
        address,
      };

      // Thực hiện gửi biểu mẫu với dữ liệu JSON
      const response = await fetch("http://localhost:4000/api/client/create", {
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
      setClientCode("");
      setNameClient("");
      setGenderClient("");
      setDateClient("");
      setEmail("");
      setPhone("");
      setAddress("");
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
        "http://localhost:4000/api/client/getAllClient"
      );
      setServices(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  // Hàm xóa
  const handleDelete = async (id: string) => {
    try {
      if (confirmDelete()) {
        const res = await axios.delete(
          `http://localhost:4000/api/client/delete/${id}`
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
              <h2 className="mt-3 mb-3">Danh sách khách hàng</h2>
              <div className="d-inline-flex">
                <div>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Thêm khách hàng
                  </button>
                </div>
                <div className="ms-3 mt-1">
                  <input
                    className="border border-2 rounded-2"
                    type="text"
                    style={{ width: "300px" }}
                    placeholder="Tìm kiếm mã KH..."
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="ms-3 mt-2">
                  <label htmlFor="typeFilter">Lọc theo giới tính:</label>
                  <select
                    className="ms-3 border border-2 rounded-2"
                    style={{ width: "130px" }}
                    id="typeFilter"
                    value={filterType}
                    onChange={handleTypeFilterChange}
                  >
                    <option value="">Tất cả</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
                <div className="ms-5 mt-1">
                  <label htmlFor="phoneFilter">Lọc theo số điện thoại:</label>
                  <input
                    type="text"
                    className="ms-3 border border-2 rounded-2"
                    id="phoneFilter"
                    value={filterphone}
                    onChange={handlephoneFilterChange}
                  />
                </div>
              </div>
              <table className="table mt-3">
                <thead className="text-nowrap">
                  <tr className="dataFields">
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("clientCode")}
                    >
                      Mã khách hàng <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("nameClient")}
                    >
                      Tên khách hàng <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("genderClient")}
                    >
                      Giới tính <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("dateClient")}
                    >
                      Ngày sinh <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("email")}
                    >
                      Email <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("phone")}
                    >
                      Số điện thoại <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("address")}
                    >
                      Địa chỉ <TbArrowsSort />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-nowrap">
                  {getCurrentItems().map((service) => (
                    <tr key={service._id}>
                      <td>{service.clientCode}</td>
                      <td>{service.nameClient}</td>
                      <td>{service.genderClient}</td>
                      <td>{service.dateClient}</td>
                      <td>{service.email}</td>
                      <td>{service.phone}</td>
                      <td>{service.address}</td>
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
                  disabled={
                    currentPage ===
                    Math.ceil(filterServices.length / itemsPerPage)
                  }
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
                Thêm khách hàng
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
                    <label htmlFor="clientCode">Mã khách hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="clientCode"
                      value={clientCode}
                      onChange={(e) => setClientCode(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameClient">Tên khách hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameClient"
                      value={nameClient}
                      onChange={(e) => setNameClient(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="genderClient">Giới tính:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="genderClient"
                      value={genderClient}
                      onChange={(e) => setGenderClient(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateClient">Ngày sinh:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="dateClient"
                      value={dateClient}
                      onChange={(e) => setDateClient(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Địa chỉ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                Sửa khách hàng
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
                    <label htmlFor="clientCode">Mã khách hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="clientCode"
                      value={editFormData.clientCode}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          clientCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameClient">Tên khách hàng:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nameClient"
                      value={editFormData.nameClient}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          nameClient: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="genderClient">Giới tính:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="genderClient"
                      value={editFormData.genderClient}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          genderClient: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateClient">Ngày sinh:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="dateClient"
                      value={editFormData.dateClient}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          dateClient: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={editFormData.email}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={editFormData.phone}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Địa chỉ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={editFormData.address}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          address: e.target.value,
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

export default Client;
