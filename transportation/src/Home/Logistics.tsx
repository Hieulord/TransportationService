import React from "react";
import { MdEmail } from "react-icons/md";
import "../Home/logistics.css";
import { Link } from "react-router-dom";
import shipping from "../images/shipping-road-1.jpg";
import shipping1 from "../images/shipping-road.jpg";
import logisticsBanner from "../images/logistics-banner.jpg";

const Logistisc = () => {
  return (
    <>
      <section
        className="container-fuild banner"
        style={{
          backgroundImage: `url(${logisticsBanner})`,
        }}
      >
        <div className="service">
          <span>Dịch Vụ Của Chúng Tôi</span>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <img className="shipping" src={shipping} alt="shipping" />
              <div className="information">
                <h4 className="mt-3 text-primary-emphasis">
                  Vận Chuyển Bộ Logistics
                </h4>
                <p className="information-1 mt-3 text-black-50">
                  Chúng tôi cung cấp dịch vụ vận chuyển hàng hóa từ điểm này đến
                  điểm khác không giới hạn tại Việt Nam nhưng trải dài qua biên
                  giới quốc gia với nhiều loại loại hàng hóa khác nhau như xe
                  tải chở hàng cỡ lớn, xe chuyên dụng thiết bị, xe tải phẳng và
                  xe tải quá tải, dịch vụ xe tải tốc hành, v.v.
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Công ty nhận vận chuyển tất cả các loại hàng hóa (trừ các mặt
                  hàng thuộc danh mục cấm của Nhà nước Việt Nam) từ số lượng nhỏ
                  đến đơn hàng lớn, dài hạn, mang lại hiệu quả cao nhất cho
                  khách hàng nhờ chính sách giá cả cạnh tranh, tiện lợi và cạnh
                  tranh nhất .
                </p>
                <img
                  className="shipping1 ms-5"
                  src={shipping1}
                  alt="shipping1"
                />
                <p className="information-1 mt-3 text-black-50">
                  Vận chuyển hàng hóa bằng đường bộ đi các tỉnh Nam – Trung –
                  Bắc là thế mạnh của công ty. Ngoài tuyến đường thế mạnh của
                  CÔNG TY VẬN TẢI VẬN CHUYỂN: Vận chuyển hàng hóa đi Hà Nội, Quy
                  Nhon, Đà Nẵng; Chúng tôi còn mở rộng sang các tuyến đường khác
                  như:
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Miền Tây: Vận chuyển toàn bộ hàng hóa đi Bến Tre, Long An, Cà
                  Mau, Cần Thơ, An Giang, Kiên Giang, Đồng Tháp, Vĩnh Long, Bạc
                  Liêu...
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Khu vực Tây Nguyên: Vận chuyển hàng hóa đi Kontum, Gia Lai,
                  Đăk Lăk, Lâm Đồng,...
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Miền Trung: Vận chuyển hàng hóa đi Quy nhơn, Đà Nẵng, Huế,
                  Quảng Bình, Thanh Hóa, Nghệ An, Bình Định, Phú Yên, Quảng
                  Ngãi,...
                </p>
                <p className="information-1 mt-3 text-black-50">
                  Miền Bắc: Vận chuyển hàng hóa đi Hà Nội, Cao Bằng, Lào Cai,
                  Thái Nguyên, Lạng Sơn, Phú Thọ, Vĩnh Phúc, Bắc Ninh, Hải
                  Phòng, Hà Nam, Thái Bình, Ninh Bình, ...
                </p>
                <p className="information-1 mt-3 text-black-50">
                  - Vận chuyển nhanh chóng - giá siêu tiết kiệm Hà Nội: 48 giờ
                  Đà Nẵng: 24 giờ Hồ Chí Minh: 24 giờ
                </p>
                <p className="information-1 mt-3 text-black-50">
                  - Hỗ trợ theo dõi lộ trình vận chuyển trực tuyến: Dịch vụ này
                  sẽ giúp khách hàng theo dõi được vị trí hàng hóa của mình đã
                  được di chuyển bất cứ lúc nào bằng hình ảnh bản đồ trực quan.
                  Ngoài ra, trên hình ảnh bản đồ này, khách hàng có thể biết
                  được phương tiện, tài xế nào đang vận chuyển hàng hóa của
                  mình. Một thông tin rất quan trọng nữa là khách hàng có thể
                  biết chính xác xe chở hàng đang ở đâu, tốc độ chạy như thế
                  nào, cách địa điểm giao hàng bao nhiêu km và thời gian giao
                  hàng dự kiến. Kiến sẽ đến nơi giao hàng trong bao lâu.
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
    </>
  );
};

export default Logistisc;
