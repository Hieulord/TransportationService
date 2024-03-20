import React from "react";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section id="footer" style={{ backgroundColor: "#0b3d66" }}>
      <div className="container footer-container mt-5 pt-3">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-5 py-5">
          <div className="col-md-4 mt-5 mt-md-0">
            <img
              src="https://demo031153.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/3101-3200/30S-03-1153/footer-logo.png&width=0"
              alt="Transland"
            />
            <p className="text-white-50 mt-3">
              🌐 Giao thông dễ dàng, thuận tiện, an toàn - Kết nối mọi khu vực
              đến mọi điểm đến vì chúng tôi hiểu giá trị của mỗi điểm đến cuộc
              hành trình của bạn! 🚚✨ Nhanh chóng, đáng tin cậy và luôn luôn di
              chuyển! 🕒🌍.
            </p>
            <div className="d-flex align-items-center">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook
                  size={50}
                  className="social-link-icon active pe-4"
                />
              </a>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter size={50} className="social-link-icon pe-4" />
              </a>
              <a href="https://www.Instagram.com" target="_blank">
                <FaInstagram size={50} className="social-link-icon pe-4" />
              </a>
              <a href="https://www.Linkedin.com" target="_blank">
                <FaLinkedin size={50} className="social-link-icon pe-4" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <FaYoutube size={50} className="social-link-icon pe-4" />
              </a>
            </div>
          </div>

          <div className="col-md-2 offset-md-1">
            <h5 className="py-3 text-uppercase text-white">
              Dịch vụ của chúng tôi
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Vận tải đường bộ logistic
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Vận chuyển đường biển
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Giao thông đường hàng không
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Vận tải đường sắt
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="py-3 text-uppercase text-white">Đường dẫn nhanh</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Địa điểm của chúng tôi
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Về chúng tôi
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Phòng trưng bày của chúng tôi
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0 text-white-50">
                  Liên hệ chúng tôi
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="py-3 text-white">Thông tin liên lạc</h5>
            <ul className="nav flex-column">
              <li className="nav-item d-flex mb-4">
                <FaMapMarkerAlt className="me-2 text-white-50 mt-1" />{" "}
                <a href="#" className="nav-link p-0 text-white-50">
                  163 Elm Drive, New York, Mỹ
                </a>
              </li>
              <li className="nav-item d-flex mb-4">
                <FaPhoneAlt className="me-2 text-white-50 mt-1" />{" "}
                <a href="#" className="nav-link p-0 text-white-50">
                  (+089) 234-516-6123
                </a>
              </li>
              <li className="nav-item d-flex mb-4">
                <FaEnvelope className="me-2 text-white-50 mt-1" />{" "}
                <a href="#" className="nav-link p-0 text-white-50">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top"></footer>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 pt-4">
          <div className="col-md-6 d-flex align-items-center">
            <p className="text-white">© 2023 Roofers - All rights reserved</p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <p className="text-white">
              © 2023 Website By:{" "}
              <a
                href="https://templatesjungle.com/"
                className="website-link text-decoration-none text-white-50"
                target="_blank"
              >
                <b>
                  <u>Jkeyan - Kaition</u>
                </b>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
