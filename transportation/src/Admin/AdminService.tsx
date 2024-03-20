import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import NavAdmin from "./NavAdmin";
import axios from "axios";
interface ServiceData {
  _id: string;
  serviceCode: string;
  name: string;
  image: File | string; // Thay đổi kiểu dữ liệu của trường image
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormData>({
    serviceCode: "",
    name: "",
    image: "", // hoặc sử dụng undefined
    type: "",
    evaluate: 5,
    price: 0,
    description: "",
  });

  const [editFormData, setEditFormData] = useState<ServiceData>({
    _id: "",
    serviceCode: "",
    name: "",
    image: "",
    type: "",
    evaluate: 5,
    price: 0,
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        `http://localhost:4000/api/service/update/${editFormData._id}`,
        editFormData
      );
      console.log(result);
      setShowModal(false);
      setIsEditing(false);
      fetchData(); // Cập nhật danh sách dịch vụ sau khi chỉnh sửa
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  const handleEdit = (service: ServiceData) => {
    setEditFormData(service);
    setIsEditing(true); // Xác định modal đang ở trạng thái chỉnh sửa
    setShowModal(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Kiểm tra xem đã chọn tệp hay chưa
      if (!selectedFile) {
        alert("Vui lòng chọn một tệp.");
        return;
      }

      // Tạo FormData và thêm tệp đã chọn vào đó
      const formData = new FormData();
      formData.append("image", selectedFile);

      // Thực hiện gửi biểu mẫu với FormData chứa tệp đã chọn
      const result = await axios.post(
        "http://localhost:4000/api/service/create",
        formData
      );
      console.log(result);
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
        <button className="btn btn-primary mb-3" onClick={openModal}>
          Thêm sản phẩm
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ</th>
              <th>Hình ảnh</th>
              <th>Loại dịch vụ</th>
              <th>Đánh giá</th>
              <th>Giá tiền</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services &&
              services.map((service) => (
                <tr key={service._id}>
                  <td>{service.serviceCode}</td>
                  <td>{service.name}</td>
                  <td>
                    {typeof service.image === "string" ? (
                      <img src={service.image} alt={service.name} />
                    ) : (
                      <span>Chưa có hình ảnh</span>
                    )}
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

      {/* Modal thêm sản phẩm */}
      {/* Modal chỉnh sửa hoặc thêm mới */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex={-1}
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {isEditing ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
              </h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>

            <form onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="serviceCode">Mã dịch vụ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="serviceCode"
                    name="serviceCode"
                    value={formData.serviceCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Tên dịch vụ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Hình Ảnh:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Loại dịch vụ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="evaluate">Đánh giá dịch vụ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="evaluate"
                    name="evaluate"
                    value={formData.evaluate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Giá dịch vụ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả dịch vụ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
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
                  {isEditing ? "Lưu thay đổi" : "Thêm"}
                </button>
              </div>
            </form>
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
