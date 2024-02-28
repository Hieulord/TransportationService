import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { Breadcrumbs, Link } from "@mui/material";

function Header() {
  return (
    <>
      <section
        className="container-fluid"
        style={{ backgroundColor: "#0b3d66", height: "100%", width: "100%" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8 text-flex-nowrap p-3 p-3">
              <a href="tel:+84338553541" className="text-decoration-none">
                <FaPhone className="mb-1" /> &nbsp;{" "}
                <span className="Information text-white">0338553541</span>
              </a>
              <a
                href="mailto:kaition79@gmail.com"
                className="text-decoration-none ms-4"
              >
                <MdEmail className="mb-1" /> &nbsp;
                <span className="Information text-white">
                  kaition79@gmail.com
                </span>
              </a>
            </div>
            <div
              className="col-2 text-flex-nowrap p-3"
              style={{ fontSize: "17px" }}
            >
              <div className="icon">
                <a
                  href="https://www.facebook.com/violet.nguyen.503092/"
                  className="text-white ms-3"
                >
                  <FaFacebookF />
                </a>{" "}
                &nbsp;
                <a
                  href="https://twitter.com/ZillNguyn1"
                  className="text-white ms-3"
                >
                  <FaTwitter />
                </a>{" "}
                &nbsp;
                <a
                  href="https://www.youtube.com/channel/UC1833tstxrdf84CfN37sHng"
                  className="text-white ms-3"
                >
                  <FaYoutube />
                </a>{" "}
                &nbsp;
                <a
                  href="https://www.pinterest.com/hiutrngdng/"
                  className="text-white ms-3"
                >
                  <FaPinterestP />
                </a>{" "}
                &nbsp;
              </div>
            </div>
            <div className="col-2 text-flex-nowrap p-3">
              <Breadcrumbs aria-label="breadcrumb" className="mt-1">
                <Link
                  underline="hover"
                  color="white"
                  href="/"
                  sx={{
                    "&:hover": {
                      textDecoration: "none",
                      color: "red",
                    },
                  }}
                >
                  EN
                </Link>
                <Link
                  underline="hover"
                  color="white"
                  href="/"
                  sx={{
                    "&:hover": {
                      textDecoration: "none",
                      color: "red",
                    },
                  }}
                >
                  VN
                </Link>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <ul className="main-menu">
                <li
                  id="menu-item-6"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-6"
                >
                  <img
                    src="https://demo031153.web30s.vn/datafiles/36872/upload/files/logo%20%282%29.png"
                    alt="Transland"
                  />
                </li>
                <li
                  id="menu-item-75"
                  className="ms-3 menu-item menu-item-type-post_type menu-item-object-page menu-item-75"
                >
                  <a href="#">Trang Chủ</a>
                </li>
                <li
                  id="menu-item-76"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"
                >
                  <a href="#">Giới thiệu</a>
                </li>
                <li
                  id="menu-item-18"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-18"
                >
                  <a href="#">Dịch Vụ Vận Chuyển</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-7"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"
                    >
                      <a href="/sample-page/">Vận chuyển đường bộ Logistics</a>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <a href="/sample-page-2/">Vận Chuyển Đường Biển</a>
                    </li>
                    <li
                      id="menu-item-16"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16"
                    >
                      <a href="/sample-page-2/">Vận Chuyển Đường Hàng Không</a>
                    </li>
                    <li
                      id="menu-item-17"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
                    >
                      <a href="/sample-page-2/">Vận Chuyển Đường Sắt</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-21"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21"
                >
                  <a href="#">Tin Tức</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-19"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
                    >
                      <a href="/sample-page/">Tin Tức Mới</a>
                    </li>
                    <li
                      id="menu-item-20"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"
                    >
                      <a href="/sample-page-2/">Tuyển Dụng</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-77"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"
                >
                  <a href="#">Liên Hệ Chúng Tôi</a>
                </li>
                <li className="mt-2 ms-5">
                  <Breadcrumbs aria-label="breadcrumb" className="mt-1">
                    <Link
                      underline="hover"
                      color="white"
                      href="/"
                      sx={{
                        "&:hover": {
                          textDecoration: "none",
                          color: "red",
                        },
                      }}
                    >
                      Đăng Nhập
                    </Link>
                    <Link
                      underline="hover"
                      color="white"
                      href="/"
                      sx={{
                        "&:hover": {
                          textDecoration: "none",
                          color: "red",
                        },
                      }}
                    >
                      Đăng Ký
                    </Link>
                  </Breadcrumbs>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
