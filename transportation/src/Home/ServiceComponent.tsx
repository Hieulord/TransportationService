import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logisticsBanner from "../images/banner-1.jpg";
import { Link } from "react-router-dom";
import Raill from "../images/Raill.png";
import { MdEmail } from "react-icons/md";
const ExampleComponent: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div
        className="dark-overlay"
        style={{
          backgroundImage: `url(${logisticsBanner})`,
          backgroundSize: "cover",
          height: "300px",
        }}
      />
      <section style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col mt-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="http://localhost:3000/">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a> Dịch Vụ Vận Chuyển</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <section style={{ maxWidth: "800px" }}>
          <section className="content">
            <div className="container mt-3 text-primary">
              <h1>Dịch Vụ Vận Chuyển</h1>
            </div>
          </section>
        </section>
      </section>

      <section>
        <div className="container mt-3">
          <div className="row">
            <div className="col-6">
              <div className="row justify-content-center">
                <div className="col-md-4 mb-sm-5 mb-5">
                  <div className="card">
                    <i className="fa-solid fa-microphone-slash fa-4x text-info p-4"></i>
                    <p className="text-capitalize">class aptent taciti</p>
                    <p>
                      Sociosqu ad Store sorquert per conubia nostra per inceptos
                      himeneeos nuilam tempus erat
                    </p>
                    <div className="half-in-half-out-button-container d-flex justify-content-center position-relative mt-2 pb-5">
                      <button className="half-in-half-out-button btn btn-info position-absolute text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-sm-5 mb-5">
                  <div className="card">
                    <i className="fa-solid fa-seedling fa-4x p-4 text-info"></i>
                    <p className="text-capitalize">id tortor etiam orci</p>
                    <p>
                      Juste lobortis in consequat ut omare vel tellus nulla
                      e'ementum vellt pretlum ultrcies
                    </p>
                    <div className="half-in-half-out-button-container d-flex justify-content-center position-relative mt-2 pb-5">
                      <button className="half-in-half-out-button btn btn-info position-absolute text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-sm-5 mb-5">
                  <div className="card">
                    <i className="fa-solid fa-ship fa-4x p-4 text-info"></i>
                    <p className="text-capitalize">tristique nibh turpis</p>
                    <p>
                      Fermentum dul sit amet consequat fells arcu quis pede
                      curabitur elit lecus consectetuer vel
                    </p>
                    <div className="half-in-half-out-button-container d-flex justify-content-center position-relative mt-2 pb-5">
                      <button className="half-in-half-out-button btn btn-info position-absolute text-white">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-header fs-5 text-primary-emphasis">
                  Hỗ Trợ Trực Tuyến
                </div>
                <div className="card-body">
                  <span className="text-black-50">Một Cách Nhanh Chóng </span>
                  <span className="text-uppercase text-danger">24/7</span>
                  <br />
                  <a href="mailto:Jkeyan-kaition@gmail.com">
                    <input
                      className="mt-3 mb-2 advise text-uppercase"
                      type="button"
                      value="Liên Hệ Ngay"
                      style={{
                        backgroundColor: "#0b3d66",
                        color: "white",
                        border: 0,
                        width: "100%",
                        height: "50px",
                      }}
                    />
                  </a>
                  <a
                    href="mailto:Jkeyan-kaition@gmail.com"
                    className="text-decoration-none"
                  >
                    <MdEmail className="mb-1" /> &nbsp;
                    <span className="Information text-black-50">
                      Jkeyan-Kaition@gmail.com
                    </span>
                  </a>
                </div>
              </div>
              <br />
              <div className="card">
                <div className="card-header fs-5 text-primary-emphasis">
                  Danh Mục Vận Chuyển
                </div>
                <div className="card-body">
                  <Link
                    className="text-black-50 text-decoration-none category"
                    to="/Logistics"
                  >
                    Vận Chuyển Đường Bộ Logistics
                  </Link>
                  <br />
                  <Link
                    className="text-black-50 text-decoration-none category"
                    to="#"
                  >
                    Vận Chuyển Đường Biển
                  </Link>
                  <br />
                  <Link
                    className="text-black-50 text-decoration-none category"
                    to="#"
                  >
                    Vận Chuyển Hàng Không
                  </Link>
                  <br />
                  <Link
                    className="text-black-50 text-decoration-none category"
                    to="#"
                  >
                    Vận Chuyển Đường Sắt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleComponent;
