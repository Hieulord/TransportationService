import React, { useState } from "react";
import logisticsBanner from "../images/banner-1.jpg";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import KTTT from "../Home/News/kinhte-tang-truong.jpg";
import CQTLAXKH from "../Home/News/cangquoctelonganxuatkhauhang.jpg";
import HAD from "../Home/News/hang-an-do.jpg";
import XG from "./News/tuyen-dung-nhan-vien.jpg";
import GTNLMB from "../Home/News/giam-thue-nhien-lieu-may-bay.jpg";
import Tmdt from "./News/thu-kho.jpg";
import { FaEye } from "react-icons/fa";

const Newss = () => {
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
                    <a style={{ textDecoration: "none" }} href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a style={{ textDecoration: "none" }}>Tin Tức</a>
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
              <h1>Tin Tức</h1>
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
            <Button variant="secondary" href="/VietnamEconomicReport">
              <FaEye /> Xem Thêm
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
            <Button variant="secondary" href="/ChinaEconomicReport">
              <FaEye /> Xem Thêm
            </Button>
          </div>
        </div>

        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={XG} />
            <h3>Tuyển nhân viên kinh doanh</h3>
            <p className="description">
              Cơ hội sáng tạo và phát triển bản thân cùng với chúng tôi! Chúng
              tôi đang tìm kiếm những tài năng đam mê kinh doanh, có khả năng
              giao tiếp tốt và sẵn lòng chinh phục thị trường. Nếu bạn muốn
              thách thức bản thân và định hình tương lai, hãy đồng hành cùng
              chúng tôi ngay hôm nay!
            </p>
            <Button variant="secondary" href="/RecruitingSalesStaff">
              <FaEye /> Xem Thêm
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
            <Button variant="secondary" href="/Acv">
              <FaEye /> Xem Thêm
            </Button>
          </div>
        </div>
        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={CQTLAXKH} />
            <h3>
              Xuất khẩu gần 50.000 tấn thép đầu tiên sau Covid-19 từ cảng Quốc
              tế Long An
            </h3>
            <p>
              (ĐTCK) Đây là số thép nằm trong tổng số lượng 50.000 tấn mà Công
              ty TVP chọn Cảng quốc tế Long An để xuất khẩu.
            </p>
            <Button variant="secondary" href="/LongAnexport">
              <FaEye /> Xem Thêm
            </Button>
          </div>
        </div>

        <div style={{ width: "calc(33% - 3px)", marginBottom: "1px" }}>
          <div style={{ backgroundColor: "#fff", padding: "1px" }}>
            <img className="shipping" src={Tmdt} />
            <h3>Tuyển thủ kho</h3>
            <p className="description">
              Tìm kiếm một tay thủ kho chuyên nghiệp! Hãy cùng chúng tôi xây
              dựng hệ thống quản lý kho hàng hiệu quả và đáng tin cậy. Liên hệ
              ngay để tham gia vào đội ngũ của chúng tôi!
            </p>
            <Button variant="secondary" href="/WarehousePlayer">
              <FaEye /> Xem Thêm
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newss;
