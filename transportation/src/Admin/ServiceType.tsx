import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";

interface ServiceTypeData {
  _id: string;
  serviceTypeCode: string;
  nameType: string;
}

const ServiceType: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [serviceTypes, setServiceTypes] = useState<ServiceTypeData[]>([]);
  const [serviceTypeCode, setServiceTypeCode] = useState("");
  const [nameType, setNameType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  //Phân Trang
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchServices.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Search Service
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const searchServices = serviceTypes.filter((service) =>
    service.serviceTypeCode.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(e.target.value);
  }

  // Sort để lưu trữ dạng sắp xếp hiện tại
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");

  const handleSort = (sortBy: keyof ServiceTypeData) => {
    const sortedServiceTypes = [...serviceTypes]; // Create a copy of the serviceTypes array
    sortedServiceTypes.sort((a, b) => {
      if (sortType === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1; // Sort in ascending order
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1; // Sort in descending order
      }
    });
    setServiceTypes(sortedServiceTypes); // Update serviceTypes array with the sorted order
    setSortType((prevSortType) => (prevSortType === "asc" ? "desc" : "asc")); // Reverse the sort type
  };

  //Edit
  const [editFormData, setEditFormData] = useState<ServiceTypeData>({
    _id: "",
    serviceTypeCode: "",
    nameType: "",
  });

  //Hàm lấy api edit
  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (checkDuplicateServiceTypeCode(editFormData.serviceTypeCode)) {
        alert("Mã dịch vụ đã tồn tại");
      }
      const result = await axios.put(
        `http://localhost:4000/api/serviceType/update/${editFormData._id}`,
        editFormData
      );
      console.log(result);
      setShowModal(false); // Ẩn modal sau khi chỉnh sửa thành công
      fetchData(); // Lấy lại dữ liệu từ API để cập nhật danh sách
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      if (error === "Mã dịch vụ đã tồn tại") {
        alert(error);
      }
    }
  };

  const handleEdit = (service: ServiceTypeData) => {
    setEditFormData(service); // Cập nhật dữ liệu của editFormData
    setShowModal(true); // Hiển thị modal chỉnh sửa
  };

  //In dữ liệu ra bảng
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/serviceType/getAllServiceType"
      );
      setServiceTypes(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (checkDuplicateServiceTypeCode(serviceTypeCode)) {
        alert("Mã loại dịch vụ đã tồn tại");
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/serviceType/create",
          {
            serviceTypeCode,
            nameType,
          }
        );
        console.log(response);
        setShowModal(false);
        fetchData();
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  // Hàm xóa
  const handleDelete = async (id: string) => {
    try {
      if (confirmDelete()) {
        const res = await axios.delete(
          `http://localhost:4000/api/serviceType/delete/${id}`
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

  //Kiểm tra mã trùng
  const checkDuplicateServiceTypeCode = (code: string): boolean => {
    return serviceTypes.some(
      (serviceType) => serviceType.serviceTypeCode === code
    );
  };

  const closeModal = () => {
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
              <h2 className="mt-3 mb-3">Danh sách loại dịch vụ</h2>
              <div className="d-inline-flex">
                <div>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Thêm loại dịch vụ
                  </button>
                </div>
                <div className="ms-3 mt-1">
                  <input
                    className="border border-2 rounded-2"
                    type="text"
                    style={{ width: "300px" }}
                    placeholder="Tìm kiếm..."
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                  />
                </div>
              </div>
              <table className="table mt-3">
                <thead>
                  <tr className="dataFields">
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("serviceTypeCode")}
                    >
                      Mã loại dịch vụ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("nameType")}
                    >
                      Tên loại dịch vụ <TbArrowsSort />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentItems().map((serviceType) => (
                    <tr key={serviceType._id}>
                      <td>{serviceType.serviceTypeCode}</td>
                      <td>{serviceType.nameType}</td>
                      <td>
                        <button
                          className="border border-0 bg-transparent"
                          onClick={() => handleEdit(serviceType)}
                        >
                          <RiEditLine />
                        </button>
                      </td>
                      <td>
                        <button
                          className="border border-0 bg-transparent"
                          onClick={() => handleDelete(String(serviceType._id))}
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
                    Math.ceil(serviceTypes.length / itemsPerPage)
                  }
                >
                  <BiRightArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal thêm loại dịch vụ */}
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
                Thêm loại dịch vụ
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
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="serviceTypeCode">Mã loại dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="serviceTypeCode"
                      value={serviceTypeCode}
                      onChange={(e) => setServiceTypeCode(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameType">Tên loại dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameType"
                      value={nameType}
                      onChange={(e) => setNameType(e.target.value)}
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
                    <label htmlFor="serviceTypeCode">Mã dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="serviceTypeCode"
                      value={editFormData.serviceTypeCode}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          serviceTypeCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nameType"
                      value={editFormData.nameType}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          nameType: e.target.value,
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

export default ServiceType;
