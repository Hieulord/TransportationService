import React, { useState, useEffect } from "react";
import "./serviceProduct.css";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMoneyBillAlt } from "react-icons/fa";
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
      <Container className="py-4">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Col key={service._id} className="col">
              <a
                className="text-decoration-none "
                href={"/Detail/" + service._id}
              >
                <Card
                  className="service-card w-100"
                  style={{ width: "18rem", height: "90%" }}
                >
                  <Card.Img
                    variant="top"
                    src={"http://localhost:4000" + service.imagePath}
                    alt={service.name}
                  />
                  <Card.Body>
                    <Card.Title className="text-center fs-4">
                      {service.name}
                    </Card.Title>
                    <Card.Text className="text-center">
                      <FaMoneyBillAlt /> <b>Giá Dịch Vụ:</b> {service.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Container className="py-4">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Col key={service._id}>
              <Card
                className="service-card w-100"
                style={{ width: "18rem", height: "80%" }}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:4000${service.imagePath}`}
                  alt={service.name}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center fs-4 mb-0">
                    {service.name}
                  </Card.Title>
                  <Card.Text className="text-center mt-auto">
                    <FaMoneyBillAlt /> <b>Giá Dịch Vụ:</b> {service.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}

      {/* <section className="container d-flex justify-content-center align-items-center position-relative overflow-hidden py-4">
        <div className="row row-cols-3 m-0 g-3">
          {services.map((service) => (
            <a
              className="col text-decoration-none"
              href={"/Detail/" + service._id}
            >
              <div
                key={service._id}
                className="card m-0 mt-3 ms-2 "
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
      </section> */}
    </>
  );
};

export default ServiceProduct;
