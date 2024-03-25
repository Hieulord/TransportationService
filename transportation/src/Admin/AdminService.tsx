import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import NavAdmin from "./NavAdmin";
import axios from "axios";

interface ServiceData {
  _id: string;
  serviceCode: string;
  name: string;
  image: File | string; // Thay đổi kiểu dữ liệu của trường image
  imagePath: string;
  type: string;
  evaluate: number;
  price: number;
  description: string;
}

const AdminService: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);

  const [name, setName] = useState("");
  const [evaluate, setEvaluate] = useState("");
  const [serviceCode, setServiceCode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);

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

  const handleSort = (sortBy: keyof ServiceData) => {
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
      service.name.toLowerCase().includes(searchKeyword.toLowerCase()) //includes là kiểm tra xem 1 chuỗi có chứa 1 chuỗi con khác không
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
        service.type.toLowerCase() === filterType.toLowerCase()) && //toLowerCase là chuyển đổi chuỗi thành chữ thường
      (filterPrice === null || service.price === filterPrice)
    ) {
      return true;
    }
    return false;
  });

  //Lọc theo loại dịch vụ
  const handleTypeFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    setFilterType(selectedType);
  };

  //Lọc theo giá tiền
  const handlePriceFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value === "" ? null : parseInt(e.target.value);
    setFilterPrice(price);
  };

  //Thêm ảnh
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  //Edit
  const [editFormData, setEditFormData] = useState<ServiceData>({
    _id: "",
    serviceCode: "",
    name: "",
    image: "",
    imagePath: "",
    type: "",
    evaluate: 5,
    price: 0,
    description: "",
  });

  //Hàm lấy api edit
  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (checkDuplicateServiceCode(editFormData.serviceCode)) {
        alert("Mã dịch vụ đã tồn tại");
      }
      const result = await axios.put(
        `http://localhost:4000/api/service/update/${editFormData._id}`,
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

  const handleEdit = (service: ServiceData) => {
    setEditFormData(service); // Cập nhật dữ liệu của editFormData
    setShowModal(true); // Hiển thị modal chỉnh sửa
  };

  //Kiểm tra mã trùng
  const checkDuplicateServiceCode = (code: string): boolean => {
    // Kiểm tra xem serviceCode có tồn tại trong danh sách dịch vụ hay không
    return services.some((service) => service.serviceCode === code);
  };

  //Form nhập
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Kiểm tra xem đã chọn tệp hay chưa
      if (!image) {
        throw new Error("Vui lòng chọn một tệp");
      }

      // Kiểm tra serviceCode có trùng không
      if (checkDuplicateServiceCode(serviceCode)) {
        alert("Mã dịch vụ đã tồn tại");
      } else {
        alert("Dữ liệu đã được lưu");
      }

      // Tạo FormData và thêm tệp đã chọn vào đó
      const form = new FormData();
      form.append("name", name);
      form.append("image", image);
      form.append("serviceCode", serviceCode);
      form.append("type", type);
      form.append("description", description);
      form.append("price", price.toString());
      form.append("evaluate", evaluate.toString());

      // Thực hiện gửi biểu mẫu với FormData chứa tệp đã chọn
      const response = await fetch("http://localhost:4000/api/service/create", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi gửi biểu mẫu");
      }
      console.log(response);
      // Xóa các trường sau khi gửi thành công
      setName("");
      setImage(null);
      setServiceCode("");
      setType("");
      setDescription("");
      setPrice("");
      setEvaluate("");
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  //In dữ liệu ra bảng
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/service/getAllProduct"
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
          `http://localhost:4000/api/service/delete/${id}`
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
              <h2 className="mt-3 mb-3">Danh sách dịch vụ</h2>
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
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="ms-3 mt-2">
                  <label htmlFor="typeFilter">Lọc theo loại dịch vụ:</label>
                  <select
                    className="ms-3 border border-2 rounded-2"
                    style={{ width: "130px" }}
                    id="typeFilter"
                    value={filterType}
                    onChange={handleTypeFilterChange}
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
                      onClick={() => handleSort("serviceCode")}
                    >
                      Mã dịch vụ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("name")}
                    >
                      Tên dịch vụ <TbArrowsSort />
                    </th>
                    <th>Hình ảnh</th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("type")}
                    >
                      Loại dịch vụ <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("evaluate")}
                    >
                      Đánh giá <TbArrowsSort />
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("price")}
                    >
                      Giá tiền <TbArrowsSort />
                    </th>
                    <th>Mô tả</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentItems().map((service) => (
                    <tr key={service._id}>
                      <td>{service.serviceCode}</td>
                      <td>{service.name}</td>
                      <td>
                        <img
                          style={{ width: 100, height: 100 }}
                          src={"http://localhost:4000" + service.imagePath}
                          alt={service.name}
                        />
                      </td>
                      <td>{service.type}</td>
                      <td>{service.evaluate}</td>
                      <td>{service.price}</td>
                      <td>{service.description}</td>
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
                    <label htmlFor="serviceCode">Mã dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="serviceCode"
                      value={serviceCode}
                      onChange={(e) => setServiceCode(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Hình Ảnh:</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Loại dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="evaluate">Đánh giá dịch vụ:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="evaluate"
                      value={evaluate}
                      onChange={(e) => setEvaluate(e.target.value)}
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
                    <label htmlFor="description">Mô tả dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                    <label htmlFor="serviceCode">Mã dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="serviceCode"
                      value={editFormData.serviceCode}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          serviceCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={editFormData.name}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Hình Ảnh:</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Loại dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      value={editFormData.type}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          type: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="evaluate">Đánh giá dịch vụ:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="evaluate"
                      value={editFormData.evaluate}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          evaluate: Number(e.target.value),
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
                    <label htmlFor="description">Mô tả dịch vụ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      value={editFormData.description}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          description: e.target.value,
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

export default AdminService;
