import React from "react";
import { Image } from "react-bootstrap";
import Banner from "../images/banner-1.jpg";

import Qa from "../images/van-chuyen-duong-bien.jpg";

const Introduce = () => {
  return (
    <>
      <div
        className="dark-overlay"
        style={{
          backgroundImage: `url(${Banner})`,
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
                    <a style={{ textDecoration: 'none'}}  href="/">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Giới Thiệu
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
              <h1>Giới Thiệu</h1>
            </div>
          </section>
        </section>
      </section>
      <section>
        <section>
          <section className="container mt-3">
            <div>
              <div>
                <p style={{ textAlign: "center" }}>
                  <Image src={Qa} />
                </p>
                <p className="container">
                  Công ty chúng tôi có 25 năm kinh nghiệm của một doanh nghiệp
                  giao nhận kho vận hàng đầu Việt nam, công ty đã nhanh chóng
                  phát huy ưu thế chủ động của mô hình mới và sự năng động của
                  đội ngũ CBNV vừa có kinh nghiệm vừa có sức trẻ, liên tục phát
                  triển có sự tăng trưởng cao đều đặn hàng năm cả về quy mô và
                  phạm vi họat động, chất lượng dịch vụ. Vốn điều lệ đã tăng từ
                  8 tỷ khi thành lập lên 90 tỷ vào đầu năm 2007, trong đó hơn
                  một nửa số vốn tăng thêm là do tích lũy từ lợi nhuận kinh
                  doanh.
                </p>
                <p className="container">Sứ mệnh và phương châm hoạt động</p>
                <p className="container">
                  Trong bối cảnh thị trường giao nhận vận tải & logistics ngày
                  càng phát triển, chuyên nghiệp, cạnh tranh và hội nhập nhanh
                  với thị trường khu vực và thế giới; hoạt động của công ty được
                  tổ chức và thực hiện trên cơ sở kết nối nội bộ, kết nối với
                  các khách hàng và đối tác để đạt mục đích là mang lại thành
                  công cho tất cả.
                </p>
                <p className="container">
                  Sứ mệnh của chúng tôi là: Cùng kết nối - Cùng thành công
                </p>
                <p className="container">
                  Là doanh nghiệp hàng đầu trong lĩnh vực logistics, công ty
                  luôn đồng hành cùng khách hàng để phát triển các dịch vụ
                  chuyên nghiệp và đa dạng, không ngừng nâng cao chất lượng dịch
                  vụ khách hàng, kiểm soát chi phí hợp lý và hiệu quả.
                </p>
                <p className="container">
                  Phương châm hoạt động của chúng tôi là: Chuyên nghiệp – Tận
                  tâm – Tin cậy – Hiệu quả
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Introduce;
