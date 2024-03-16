import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";
import logisticsBanner from "../images/banner-1.jpg";
import Kinhdoanh from "../News/tuyen-dung-nhan-vien.jpg";
import ThuKho from "../News/thu-kho.jpg";
import { BsPerson, BsEnvelope } from "react-icons/bs";

const Recruitment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Xử lý việc gửi biểu mẫu
    console.log("Biểu mẫu được gửi:", { name, email, subject, message });
  };
  return (
    <>
      {/* header */}
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
                  <li className="breadcrumb-item">
                    <a href="/">Tin Tức</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a>Tuyển Dụng</a>
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
              <h1>Tuyển Dụng</h1>
            </div>
          </section>
        </section>
      </section>
      {/* body */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div>
                  <div className="card-body">
                    <h3 className="">
                      <img
                        className="sea mt-3"
                        src={ThuKho}
                        alt="sea"
                        style={{ width: "850px", height: "500px" }}
                      />
                      <a href="#" style={{ textDecoration: "none" }}>
                        Tuyển thủ kho
                      </a>
                    </h3>
                    <a>
                      <FaCalendarAlt /> <span>09/10/2023</span>
                    </a>{" "}
                    <a>
                      <FaUsers /> <span>119</span>
                    </a>
                    <p className="card-text">
                      Tuyển thủ kho Mô tả – Xuất nhập tồn hàng hóa – Ghi nhận
                      nhiệp, Tuyển thủ kho Mô tả – Xuất nhập tồn hàng hóa – Ghi
                      nhận nhiệp
                    </p>
                  </div>
                </div>

                <div>
                  <div className="card-body">
                    <h3>
                      <img
                        className="sea"
                        src={Kinhdoanh}
                        alt="sea"
                        style={{ width: "850px", height: "500px" }}
                      />
                      <a href="#" style={{ textDecoration: "none" }}>
                        Tuyển nhân viên kinh doanh
                      </a>
                    </h3>
                    <a>
                      <FaCalendarAlt /> <span>09/10/2023</span>
                    </a>{" "}
                    <a>
                      <FaUsers /> <span>87</span>
                    </a>
                  </div>
                  <p className="card-text">
                    Công Ty TNHH DVVC Transland Tuyển Dụng VỊ TRÍ: CHUYÊN VIÊN
                    KINH DOANH, Công Ty TNHH DVVC Transland Tuyển Dụng VỊ TRÍ:
                    CHUYÊN VIÊN KINH DOANH
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 sidebar-widgets">
              <div className="widget-wrap">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Tìm kiếm</h2>
                    <form className="search-form" action="/News">
                      <div className="input-group">
                        <input
                          value=""
                          name="keyword"
                          type="text"
                          className="form-control"
                          placeholder="Nhập từ khóa....."
                          autoComplete="off"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <FaSearch />
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="d-flex flex-column mt-4">
                      <h2 className="widget-title">
                        <span>Danh mục tin tức</span>
                      </h2>
                      <div className="submenu">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="/News"
                              target="_blank"
                            >
                              Tin tức
                            </a>
                          </li>
                          <li className="nav-item active">
                            <a
                              className="nav-link"
                              href="/Recruitment"
                              target="_blank"
                            >
                              Tuyển dụng
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="d-flex flex-column mt-4">
                      <h4 className="widget-title">
                        <span>Bài viết mới</span>
                      </h4>
                      <div className="recent-posts">
                        <p>Không có thông tin cho loại dữ liệu này</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-3">
                  <h4 className="card-title text-center mt-2">
                    Đăng Kí Ứng Tuyển
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group col-md-10">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <BsPerson />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nhập Tên"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-10 mt-2">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <BsEnvelope />
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Nhập địa chỉ email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Chủ đề"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={5}
                        name="message"
                        placeholder="Nội dung"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <div className="text-center mt-4 ">
                      <button type="submit" className="btn btn-primary">
                        Ứng tuyển ngay
                      </button>
                    </div>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruitment;
