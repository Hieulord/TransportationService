import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaCheck,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaViber,
  FaReddit,
} from "react-icons/fa";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import ThuKho from "../News/thu-kho.jpg";
import NVKD from "../News/tuyen-dung-nhan-vien.jpg";
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
                    <a style={{textDecoration:"none"}} href="/">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a style={{textDecoration:"none"}} href="/Newss">Tin Tức</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a style={{textDecoration:"none"}} >Tuyển Dụng</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
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
                      <a
                        href="/WarehousePlayer"
                        style={{ textDecoration: "none" }}
                      >
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
                  <div>
                    <p>
                      <FaCheck /> Xuất nhập tồn hàng hóa <br />
                      <FaCheck /> Ghi nhận nhiệp vụ trên phần mềm máy tính (Được
                      hướng dẫn) <br />
                      <FaCheck /> Kiểm soát vật tư tại kho. <br />
                      <FaCheck /> Tuân thủ nội quy kho và tổ chức công tác xuất
                      nhập kho hiệu quả <br />
                      <FaCheck /> Báo cáo công việc theo ngày, tuần, tháng
                    </p>
                    <p>
                      <strong>Yêu cầu:</strong> <br />
                      <FaCheck /> Sử dụng thành thạo tin học văn phòng, Exel.{" "}
                      <br />
                      <FaCheck /> Số năm kinh nghiệm làm việc: 01 năm <br />
                      <FaCheck /> Chủ động trong công việc. <br />
                      <FaCheck /> Thời gian làm việc theo ca: thỏa thuận.
                    </p>
                    <p>
                      <strong>Quyền lợi:</strong> <br />
                      <FaCheck /> Mức lương thỏa thuận + phụ cấp cơm trưa điện
                      thoại + hoa hồng kinh doanh nếu có khách hàng riêng.{" "}
                      <br />
                      <FaCheck /> BHYT, BHXH, BHTN + thưởng theo chính sách.{" "}
                      <br />
                      <FaCheck /> Môi trường làm việc chuyên nghiệp, năng động,
                      đội ngũ nhân viên trẻ
                    </p>
                    <p>
                      <strong>Thông tin nộp hồ sơ:</strong> <br />
                      Ms Tuấn. Email: admin@demo.web30s.vn <br />
                      Điện thoại: 1900 9477
                    </p>
                  </div>
                  <div className="share-buttons">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontSize: "14px",
                        padding: "10px",
                        borderRadius: "40%",
                      }}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontSize: "14px",
                        padding: "10px",
                        borderRadius: "40%",
                      }}
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontSize: "14px",
                        padding: "10px",
                        borderRadius: "40%",
                      }}
                    >
                      <FaPinterest />
                    </a>

                    <a
                      href="http://reddit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontSize: "14px",
                        padding: "10px",
                        borderRadius: "40%",
                      }}
                    >
                      <FaReddit />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 sidebar-widgets">
              <div className="widget-wrap">
                <div className="card">
                  <div className="card-body">
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
                  </div>
                </div>

                <div className="related-articles card card-body">
                  <h2>Bài viết liên quan</h2>
                  <div style={{ width: "290px" }}>
                    <div className="article-details">
                      <p>
                        <a
                          href="/RecruitingSalesStaff"
                          style={{ textDecoration: "none" }}
                          className="text-black"
                        >
                          <img
                            style={{
                              width: "50px",
                              height: "40px",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                            src={NVKD}
                          />
                          Tuyển nhân viên kinh doanh
                        </a>
                      </p>
                      <div className="article-info">
                        <a>
                          <FaCalendarAlt /> <span>09/10/2023</span>
                        </a>{" "}
                        <a>
                          <FaUsers /> <span>119</span>
                        </a>
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

                    <div className="text-center mt-4">
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
