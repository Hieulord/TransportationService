import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
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

interface FormData {
  serviceCode: string;
  name: string;
  image: File | string; // Thay đổi kiểu dữ liệu của trường image
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
  // State để lưu trữ dạng sắp xếp hiện tại
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");

  const handleSort = (sortBy: keyof ServiceData) => {
    const sortedServices = [...services]; // Tạo một bản sao của danh sách dịch vụ
    sortedServices.sort((a, b) => {
      if (sortType === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    setServices(sortedServices); // Cập nhật danh sách dịch vụ với thứ tự đã sắp xếp
    setSortType(sortType === "asc" ? "desc" : "asc"); // Đảo ngược loại sắp xếp
  };
  // Filter
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(e.target.value);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

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

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        `http://localhost:4000/api/service/update/${editFormData._id}`,
        editFormData
      );
      console.log(result);
      setShowModal(false); // Ẩn modal sau khi chỉnh sửa thành công
      fetchData(); // Lấy lại dữ liệu từ API để cập nhật danh sách
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  const handleEdit = (service: ServiceData) => {
    setEditFormData(service); // Cập nhật dữ liệu của editFormData
    setShowModal(true); // Hiển thị modal chỉnh sửa
  };

  const checkDuplicateServiceCode = (code: string): boolean => {
    // Kiểm tra xem serviceCode có tồn tại trong danh sách dịch vụ hay không
    return services.some(service => service.serviceCode === code);
  };
  
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
  
      alert("Dữ liệu đã được lưu");
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

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/service/delete/${id}`
      );
      console.log(res);
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setIsEditing(false);
    setShowModal(false);
  };

  return (
    <>
      <NavAdmin />
      <div className="container">
        <h2>Danh sách dịch vụ</h2>
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
              type="text"
              style={{ width: "300px" }}
              placeholder="Tìm kiếm..."
              value={searchKeyword}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => handleSort("serviceCode")}>Mã dịch vụ</th>
              <th onClick={() => handleSort("serviceCode")}>Tên dịch vụ</th>
              <th>Hình ảnh</th>
              <th onClick={() => handleSort("serviceCode")}>Loại dịch vụ</th>
              <th onClick={() => handleSort("serviceCode")}>Đánh giá</th>
              <th onClick={() => handleSort("serviceCode")}>Giá tiền</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
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

      <div
        className={`modal-backdrop fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      ></div>
    </>
  );
};

export default AdminService;
