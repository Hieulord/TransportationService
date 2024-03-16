import React, { useState } from "react";
import logisticsBanner from "../images/banner-1.jpg";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import KTTT from "../News/kinhte-tang-truong.jpg";
import CQTLAXKH from "../News/cangquoctelonganxuatkhauhang.jpg";
import HAD from "../News/hang-an-do.jpg";
import XG from "../News/xang-giam-29-6-2020.jpeg";
import GTNLMB from "../News/giam-thue-nhien-lieu-may-bay.jpg";
import Tmdt from "../News/tmdt-2.jpg";
import { FaEye } from "react-icons/fa";

const News = () => {
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
                  <li className="breadcrumb-item">
                    <a href="/">Tin Tức</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a>Tin Tức Mới</a>
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
              <h1>Tin Tức Mới</h1>
            </div>
          </section>
        </section>
      </section>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <section style={{ maxWidth: "800px" }}>
          <section className="content">
            <div className="container">
              <p>Cập nhât thông tin thị trường quốc tế và trong nước</p>
            </div>
          </section>
        </section>
      </section>

      <section
        className="container "
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={KTTT} />
            <h3>Việt Nam vẫn tăng trưởng dương, đạt 0,36% trong quý II/2020</h3>
            <p>
              (VNF) - Trong bối cảnh kinh tế thế giới hết sức khó khăn do tác
              động của đại dịch Covid-19, GDP quý II/2020 của Việt Nam vẫn tăng
              0,36%. Tính chung 6 tháng đầu năm, GDP tăng 1,81% so với cùng kỳ
              năm trước,
            </p>
            <Button variant="secondary">
              <FaEye /> View Details
            </Button>
          </div>
        </div>
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={HAD} />
            <h3>
              Hàng hóa Trung Quốc 'chết cứng' tại biên giới: Ấn Độ cho Bắc Kinh
              'nếm mùi'?
            </h3>
            <p>
              Theo nhiều nguồn tin, cơ quan hải quan tại cảng Chennai, một trong
              những cảng lớn nhất của Ấn Độ, đã quyết định chưa thông quan cho
              các lô hàng xuất xứ từ Trung Quốc.
            </p>
            <Button variant="secondary">
              <FaEye /> View Details
            </Button>
          </div>
        </div>
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={CQTLAXKH} />
            <h3>
              Xuất khẩu gần 50.000 tấn thép đầu tiên sau Covid-19 từ cảng Quốc
              tế Long A
            </h3>
            <p>
              (ĐTCK) Đây là số thép nằm trong tổng số lượng 50.000 tấn mà Công
              ty TVP chọn Cảng quốc tế Long An để xuất khẩu.
            </p>
            <Button variant="secondary">
              <FaEye /> View Details
            </Button>
          </div>
        </div>
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={Tmdt} />
            <h3>
              Vì sao các doanh nghiệp thi nhau 'lên sàn' thương mại điện tử?
            </h3>
            <p>
              Lên sàn thương mại điện tử cũng giống như mở thêm một cửa hàng,
              nơi doanh nghiệp có thể tiếp cận nhiều khách hàng, từ đó hứa hẹn
              thúc đẩy doanh thu.
            </p>
            <Button variant="secondary">
              <FaEye /> View Details
            </Button>
          </div>
        </div>
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={GTNLMB} />
            <h3>ACV dự kiến lợi nhuận 2020 giảm 80%</h3>
            <p>
              Tại đại hội đồng cổ đông thường niên, cổ đông lớn của Tổng công ty
              Cảng hàng không Việt Nam (ACV) đã đề xuất mục tiêu lợi nhuận trước
              thuế 2.007 tỷ đồng, giảm 80% so với năm trước.
            </p>
            <Button variant="secondary">
              <FaEye /> View Details
            </Button>
          </div>
        </div>
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={XG} />
            <h3>Đề xuất giảm thuế môi trường với nhiên liệu bay</h3>
            <p className="description">
              Ngày 26.6, Bộ Tài chính cho biết đã gửi Chính phủ dự thảo Nghị
              quyết mức thuế bảo vệ môi trường (BVMT) đối với nhiên liệu bay đến
              hết ngày 31.12.2020, nhằm tháo gỡ khó khăn cho ngành hàng không
              trước dịch Covid-19.
            </p>
            <Button variant="secondary">
              <FaEye /> View Details
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
