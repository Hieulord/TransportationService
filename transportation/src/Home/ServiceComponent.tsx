import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logisticsBanner from "../images/banner-1.jpg";
import { Link } from "react-router-dom";
import sea from "../images/sea.jpg";
import Rail3 from "../images/Rail3.jpg";
import Fly2 from "../images/Fly2.jpg";
import shipper from "../images/Đường bộ.png";
import { MdEmail } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
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
                    <a href="/">Trang chủ</a>
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

      {/* <div className="col-8 mt-3">
              <div className="row row-cols-1">
                <div className="col">
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
                <div className="col">
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
                <div className="col">
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
                <div className="col">
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
            </div> */}
      <section>
        <div className="container mt-3">
          <div className="row">
            <article className="custom-repeater-item custom-hover col-8 mt-3">
              <div className="row mt-3">
                <div className="col-md-5">
                  <img
                    src={shipper}
                    className="img-fluid"
                    alt="Vận chuyển vật liệu xây dựng"
                    style={{ height: '500px", width: "900px' }}
                  />
                </div>
                <div className="col mt-5">
                  <div className="card-body">
                    <h3 className="card-title">Vận chuyển bộ Logistics</h3>
                    <p className="card-text">
                      Dịch vụ vận chuyển logistics của chúng tôi cung cấp giải
                      pháp vận chuyển toàn diện, cam kết đảm bảo hàng hóa của
                      khách hàng được vận chuyển an toàn, nhanh chóng và hiệu
                      quả.
                    </p>
                    <div className="custom-widget-button">
                      <a
                        href="/Logistics"
                        className="btn btn-primary"
                        title="Xem thêm"
                      >
                        Xem thêm <FaArrowAltCircleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-5">
                  <img
                    src={sea}
                    className="img-fluid"
                    alt="Vận chuyển vật liệu xây dựng"
                    style={{ height: '500px", width: "900px' }}
                  />
                </div>
                <div className="col mt-5">
                  <div className="card-body">
                    <h3 className="card-title">Vận chuyển đường biển</h3>
                    <p className="card-text">
                      Dịch vụ vận chuyển đường biển nội địa cung cấp giải pháp
                      vận chuyển hiệu quả và đáng tin cậy trong nước, đảm bảo
                      hàng hóa được vận chuyển đúng hẹn và an toàn.
                    </p>
                    <div className="custom-widget-button">
                      <a
                        href="/Sea"
                        className="btn btn-primary"
                        title="Xem thêm"
                      >
                        Xem thêm <FaArrowAltCircleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-5">
                  {" "}
                  {/* Increased the column width */}
                  <img
                    src={Fly2}
                    className="img-fluid"
                    alt="Vận chuyển vật liệu xây dựng"
                    style={{ height: '500px", width: "500px' }}
                  />
                </div>
                <div className="col mt-5">
                  <div className="card-body">
                    <h3 className="card-title">Vận chuyển đường hàng không</h3>
                    <p className="card-text">
                      Air cargo là hình thức vận chuyển hàng hóa bằng đường hàng
                      không, sử dụng máy bay chở hàng hoặc chuyên chở trong phần
                      bụng của máy bay hành khách.
                    </p>
                    <div className="custom-widget-button">
                      <a
                        href="/Fly"
                        className="btn btn-primary"
                        title="Xem thêm"
                      >
                        Xem thêm <FaArrowAltCircleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-5">
                  {" "}
                  {/* Increased the column width */}
                  <img
                    src={Rail3}
                    className="img-fluid"
                    alt="Vận chuyển vật liệu xây dựng"
                    style={{ height: '500px", width: "500px' }}
                  />
                </div>
                <div className="col mt-4">
                  <div className="card-body">
                    <h3 className="card-title">Vận chuyển đường sắt</h3>
                    <p className="card-text">
                      Vận chuyển đường sắt là hoạt động di chuyển hàng hóa và
                      hành khách bằng tàu hỏa trên hệ thống đường ray.Đường sắt
                      có thể cung cấp một giải pháp vận chuyển hiệu quả từ góc
                      độ chi phí, đặc biệt là đối với các quãng đường dài.
                    </p>
                    <div className="custom-widget-button">
                      <a
                        href="/Rail"
                        className="btn btn-primary"
                        title="Xem thêm"
                      >
                        Xem thêm <FaArrowAltCircleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="col-2">
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
                    to="/Sea"
                  >
                    Vận Chuyển Đường Biển
                  </Link>
                  <br />
                  <Link
                    className="text-black-50 text-decoration-none category"
                    to="/Fly"
                  >
                    Vận Chuyển Hàng Không
                  </Link>
                  <br />
                  <Link
                    className="text-black-50 text-decoration-none category"
                    to="/Rail"
                  >
                    Vận Chuyển Đường Sắt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExampleComponent;
