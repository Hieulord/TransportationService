import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Flyr from "../images/Flyr.jpg";
import Fly2 from "../images/Fly2.jpg";
import Fly3 from "../images/Fly3.jpg";
import logisticsBanner from "../images/banner-1.jpg";

const Fly = () => {
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
                    <a href="http:///"> Dịch Vụ Vận Chuyển</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Vận Chuyển Hàng Không
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
              <h1>Vận Chuyển Hàng Không</h1>
            </div>
          </section>
        </section>
      </section>

      <section>
        <div className="container mt-3">
          <div className="row">
            <div className="col-8">
              <img className="Fly" src={Flyr} alt="Fly" />
              <div className="information">
                <h4 className="mt-3 text-primary-emphasis">
                  Vận Chuyển Hàng Không
                </h4>
                <p className="information-2 mt-3 text-black-50">
                  CARTING CAM KẾT VỚI KHÁCH HÀNG:
                </p>
                <p className="information-1 ms-5 mt-3 text-black-50">
                  &raquo; &nbsp; Vận chuyển hàng hóa an toàn từ Việt Nam đến các
                  cảng hàng không chính và phụ trên thế giới hay ngược lại.
                  <br />
                  &raquo; &nbsp; Giá cước tốt và cạnh tranh.
                  <br />
                  &raquo; &nbsp; Xử lý hàng hóa chuyên nghiệp.
                  <br />
                  &raquo; &nbsp; Cung cấp nhiều lịch tàu phù hợp với yêu cầu của
                  khách hàng.
                  <br />
                  &raquo; &nbsp; Áp dụng vận chuyển cho mọi loại hình container
                  hoặc ghép container phù hợp với từng loại hàng hóa và yêu cầu
                  của khách hàng.
                  <br />
                  &raquo; &nbsp; Thường xuyên cập nhật tình hình hàng hóa cho
                  khách hàng trong suốt quá trình vận chuyển từ lúc nhận hàng
                  đến lúc giao hàng.
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Bên cạnh vận tải đường bộ và vận tải đường hàng không, còn có
                  hình thức vận tải Hàng Không. Việc khai thác thêm hình thức
                  vận tải này nhằm đáp ứng các nhu cầu vận tải hàng hóa giúp
                  khách hàng có thêm nhiều lựa chọn cho việc vận chuyển của mình
                  và đảm bảo hiệu quả giao nhận tốt nhất.
                </p>
                {/* Nội dung vận chuyển Hàng Không */}
                <p className="information-1 mt-3 text-black-50">
                  &raquo; &nbsp; Vận chuyển hàng hóa an toàn bằng phương tiện và
                  cơ sở hạ tầng Hàng Không đến mọi nơi trên thế giới.
                  <br />
                  &raquo; &nbsp; Cam kết giá cước cạnh tranh và dịch vụ chuyên
                  nghiệp.
                  <br />
                  &raquo; &nbsp; Đa dạng các lịch trình vận chuyển phù hợp với
                  nhu cầu của khách hàng.
                  <br />
                  &raquo; &nbsp; Sử dụng các loại container và phương tiện vận
                  chuyển phù hợp với loại hàng hóa.
                  <br />
                  &raquo; &nbsp; Cập nhật thông tin vận chuyển định kỳ cho khách
                  hàng trong quá trình vận chuyển.
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Hình thức vận chuyển Hàng Không là một lựa chọn hiệu quả cho
                  việc chuyển phát nhanh và an toàn của hàng hóa, đặc biệt là
                  những loại hàng có kích thước lớn hoặc cần giao hàng đến nhanh
                  chóng.
                </p>

                <p>
                  <img className="Fly2 ms-3" src={Fly2} alt="Fly2" />
                  <br />
                  <span className="ms-3">
                    Vận tải Hàng Không sẽ thích hợp để vận chuyển hàng hóa có
                    khối lượng và kích thước lớn
                  </span>
                </p>
                <p className="information-1 mt-3 text-black-50">
                  <b> Vận tải Hàng Không là gì?</b> <br />
                  Vận tải Hàng Không là hình thức vận chuyển hàng hóa sử dụng
                  phương tiện và cơ sở hạ tầng Hàng Không để phục vụ cho mục
                  đích vận chuyển. Phương tiện thường dùng sẽ là các tàu thuyền
                  và phương tiện xếp, tháo gỡ hàng hóa như xe cần cẩu… Cơ sở hạ
                  tầng để phục vụ cho vận tải Hàng Không bao gồm các cảng biển,
                  các cảng trung chuyển…
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Vận tải Hàng Không thích hợp cho những khu vực có vùng biển
                  liền kề và có cảng cho tàu cập bến. Có thể thực hiện vận
                  chuyển hàng hóa bằng Hàng Không trong nước hoặc chuyển hàng
                  quốc tế đều được. Vì các tàu vận chuyển thường quy mô và trọng
                  tải lớn nên thông thường hình thức vận tải Hàng Không được áp
                  dụng nhiều cho ngành xuất nhập khẩu để chở số lượng hàng hóa
                  có khối lượng lớn.
                </p>
                <p>
                  <img className="Fly3 ms-3" src={Fly3} alt="Fly3" />
                  <br />
                </p>
                <p className="information-1 mt-3 text-black-50">
                  <span style={{ fontFamily: "sans-serif", fontWeight: "600" }}>
                    Ưu điểm của vận tải Hàng Không
                  </span>
                  <br />
                  <p className="ms-4">
                    &raquo; &nbsp; Ngoài việc đáp ứng nhu cầu vận chuyển hàng
                    hóa thì vận tải Hàng Không còn có khá nhiều ưu điểm khác để
                    người gửi hàng có thể lựa chọn: <br />
                    &raquo; &nbsp; Có thể vận chuyển được những khối hàng có
                    kích thước và khối lượng lớn. <br />
                    &raquo; &nbsp; Hầu như không bị hạn chế về số lượng phương
                    tiện và công cụ hỗ trợ vận chuyển. <br />
                    &raquo; &nbsp; Giá thành vận chuyển thấp hơn các loại hình
                    khác. <br />
                    &raquo; &nbsp; Các tuyến đường vận tải trên biển hầu như là
                    tuyến đường giao thông tự nhiên nên ít gặp các trở ngại khi
                    di chuyển so với đường bộ. <br />
                    &raquo; &nbsp; Có tính an toàn cao do ít va chạm giữa các
                    tàu hàng. <br />
                    &raquo; &nbsp; Góp phần mở rộng giao thương quốc tế thông
                    qua Hàng Không. <br />
                    &raquo; &nbsp; Tuy nhiên, vận tải Hàng Không vẫn có những
                    hạn chế như:
                  </p>
                </p>
                <p className="information-1 mt-3 text-black-50">
                  &raquo; &nbsp; Không thể giao hàng đến tận nơi trên đất liền,
                  vì vậy sẽ cần kết hợp với các phương thức vận tải khác. <br />
                  &raquo; &nbsp; Thường mất khá nhiều thời gian, thế nên không
                  thật sự phù hợp cho nhu cầu chuyển phát nhanh hàng hóa. <br />
                  &raquo; &nbsp; Những mặt hàng bạn nên vận tải Hàng Không{" "}
                  <br />
                  &raquo; &nbsp; Ngoài những hàng hóa nghiêm cấm vận chuyển dưới
                  mọi hình thức thì hầu như vận tải Hàng Không chấp nhận vận
                  chuyển đa số các loại hàng hóa. <br />
                  &raquo; &nbsp; Đây được xem là một trong những ưu điểm tuyệt
                  vời của vận tải Hàng Không. <br />
                  &raquo; &nbsp; Nhờ đó, những hàng hóa mà các hình thức vận
                  chuyển khác từ chối thì người gửi có thể xem xét chuyển qua
                  hình thức vận tải Hàng Không. <br />
                  &raquo; &nbsp; Thông thường với hàng hóa chọn vận tải đường
                  biển sẽ được chia làm các chủng loại thuộc các nhóm để đơn vị
                  vận chuyển có được phương án vận chuyển tối ưu nhất.
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <div className="card-header fs-5 text-primary-emphasis">
                  Báo Giá Dịch Vụ
                </div>
                <div className="card-body">
                  <span className="text-black-50">Giá: </span>
                  <span className="text-uppercase text-danger">Liên hệ</span>
                  <br />
                  <a href="mailto:Jkeyan-kaition@gmail.com">
                    <input
                      className="mt-3 mb-2 advise text-uppercase"
                      type="button"
                      value="Tư Vấn Dịch Vụ"
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

export default Fly;
