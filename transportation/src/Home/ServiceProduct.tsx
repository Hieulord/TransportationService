import React, { useState, useEffect } from "react";
import "./serviceProduct.css";
import axios from "axios";

interface Service {
  _id: string;
  serviceCode: string;
  name: string;
  imagePath: string;
  type: string;
  evaluate: number;
  price: number;
  description: string;
}

const ServiceProduct: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  const getProduct = async () => {
    // Gọi API để lấy danh sách dịch vụ từ MongoDB
    try {
      const res = await axios.get(
        "http://localhost:4000/api/service/getAllProduct"
      );
      setServices(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <section className="container d-flex justify-content-center align-items-center position-relative overflow-hidden py-4">
        <div className="row row-cols-3 m-0 g-3">
          {services.map((service) => (
            <a
              className="col text-decoration-none"
              href={"/Detail/" + service._id}
            >
              <div
                key={service._id}
                className="card m-0 mt-3 ms-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={"http://localhost:4000" + service.imagePath}
                  className="card-img-top"
                  alt={service.name}
                  style={{ width: "100%", height: "150px" }} // Thiết lập kích thước hình ảnh
                />
                <div className="card-body">
                  <h5 className="card-title text-center fs-4">
                    {service.name}
                  </h5>
                  <p className="card-text">
                    <b>Giá Dịch Vụ:</b> {service.price}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceProduct;
