import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";

interface StaffData {
  _id: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean; // Đã thay đổi kiểu dữ liệu của trường isAdmin thành boolean
  password: string;
  email: string;
  phone: string;
}

const User: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [services, setServices] = useState<StaffData[]>([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Khởi tạo isAdmin với giá trị ban đầu là false
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
      service.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) // Thay đổi từ "name" thành "firstName"
  );

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(e.target.value);
  }

  //Filter
  const [filterType, setFilterType] = useState<string>("");

  //Hàm kiểm tra bộ lọc
  const filterServices = searchServices.filter((service) => {
    // Kiểm tra nếu không có bộ lọc hoặc dịch vụ không phù hợp với bộ lọc
    if (
      filterType === "" ||
      service.isAdmin === (filterType.toLowerCase() === "true")
    ) {
      return true;
    }
    return false;
  });

  //Lọc theo loại dịch vụ
  const handleTypeFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const isAdmin = e.target.value;
    setFilterType(isAdmin);
  };

  //Edit
  const [editFormData, setEditFormData] = useState<StaffData>({
    _id: "",
    firstName: "",
    lastName: "",
    isAdmin: false, // Khởi tạo isAdmin trong editFormData với giá trị ban đầu là false
    password: "",
    email: "",
    phone: "",
  });

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const isDuplicateEmail = checkDuplicateServiceCode(editFormData.email);

      if (isDuplicateEmail) {
        alert("Email đã tồn tại");
        return;
      }

      const response = await axios.put(
        `http://localhost:4000/api/user/update-user/${editFormData._id}`,
        editFormData
      );

      if (response.status === 200) {
        console.log("Chỉnh sửa thành công:", response.data);
        setShowModal(false); // Ẩn modal sau khi chỉnh sửa thành công
        fetchData(); // Lấy lại dữ liệu từ API để cập nhật danh sách
      } else {
        console.error("Lỗi khi chỉnh sửa tài khoản:", response.statusText);
        alert("Đã xảy ra lỗi khi chỉnh sửa tài khoản");
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
    return services.some((service) => service.email === code);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Kiểm tra serviceCode có trùng không
      if (checkDuplicateServiceCode(email)) {
        alert("Email đã tồn tại");
        return;
      }

      // Tạo object chứa dữ liệu để gửi đi
      const requestData = {
        firstName,
        lastName,
        isAdmin,
        password,
        email,
        phone,
      };

      // Thực hiện gửi biểu mẫu với dữ liệu JSON
      const response = await fetch("http://localhost:4000/api/user/sign-up", {
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
      setFirstName("");
      setLastName("");
      setIsAdmin(false);
      setPassWord("");
      setEmail("");
      setPhone("");
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
      const res = await axios.get("http://localhost:4000/api/user/getAll");
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
          `http://localhost:4000/api/user/delete-user/${id}`
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
              <h2 className="mt-3 mb-3">Danh sách tài khoản</h2>
              <div className="d-inline-flex">
                <div className="ms-3 mt-1">
                  <input
                    className="border border-2 rounded-2"
                    type="text"
                    style={{ width: "300px" }}
                    placeholder="Tìm kiếm tên TK..."
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="ms-3 mt-2">
                  <label htmlFor="typeFilter">
                    Lọc User (False) & Admin (True):
                  </label>
                  <select
                    className="ms-3 border border-2 rounded-2"
                    style={{ width: "130px" }}
                    id="typeFilter"
                    value={filterType}
                    onChange={handleTypeFilterChange}
                  >
                    <option value="">Tất cả</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
              </div>
              <table className="table mt-3">
                <thead className="text-nowrap">
                  <tr className="dataFields">
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("firstName")}
                    >
                      Tên <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("lastName")}
                    >
                      Họ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("isAdmin")}
                    >
                      Quyền <TbArrowsSort />
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
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-nowrap">
                  {getCurrentItems().map((service) => (
                    <tr key={service._id}>
                      <td>{service.firstName}</td>
                      <td>{service.lastName}</td>
                      <td>{service.isAdmin ? "True" : "False"}</td>
                      <td>{service.email}</td>
                      <td>{service.phone}</td>
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
                Thêm tài khoản
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
                    <label htmlFor="firstName">Tên :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Họ :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="isAdmin">Quyền:</label>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="true"
                        name="isAdmin"
                        checked={isAdmin === true}
                        onChange={() => setIsAdmin(true)}
                      />
                      <label className="ms-2 me-2" htmlFor="true">
                        True
                      </label>
                      <input
                        type="radio"
                        id="false"
                        name="isAdmin"
                        checked={isAdmin === false}
                        onChange={() => setIsAdmin(false)}
                      />
                      <label className="ms-2 me-2" htmlFor="false">
                        False
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Mật khẩu :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassWord(e.target.value)}
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
                Sửa tài khoản
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
                    <label htmlFor="firstName">Tên:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={editFormData.firstName}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Họ:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={editFormData.lastName}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="isAdmin">Quyền:</label>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="true"
                        name="editIsAdmin"
                        checked={editFormData.isAdmin === true}
                        onChange={() =>
                          setEditFormData({
                            ...editFormData,
                            isAdmin: true,
                          })
                        }
                      />
                      <label className="ms-2 me-2" htmlFor="true">
                        True
                      </label>
                      <input
                        type="radio"
                        id="false"
                        name="editIsAdmin"
                        checked={editFormData.isAdmin === false}
                        onChange={() =>
                          setEditFormData({
                            ...editFormData,
                            isAdmin: false,
                          })
                        }
                      />
                      <label className="ms-2 me-2" htmlFor="false">
                        False
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      value={editFormData.password}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          password: e.target.value,
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
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
