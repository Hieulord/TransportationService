import React from "react";
import { useTranslation } from 'react-i18next';
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom"; // Đổi tên thành RouterLink
import { Breadcrumbs, Link as MuiLink } from "@mui/material"; // Đổi tên thành MuiLink
import { locales } from "../i18n/i18n";

function Header() {
  const { t, i18n } = useTranslation();
  const currentLanguage = locales[i18n.language as keyof typeof locales];

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng);
  }
  console.log(currentLanguage); // Dòng này để kiểm tra xem ngôn ngữ có hoạt động đúng không
  return (
    <>
      <section
        className="container-fluid"
        style={{ backgroundColor: "#0b3d66", height: "100%", width: "100%" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8 text-flex-nowrap p-3 p-3">
              <a href="tel:+842522222222" className="text-decoration-none">
                <FaPhone className="mb-1" /> &nbsp;{" "}
                <span className="Information text-white">0338*******</span>
              </a>
              <a
                href="mailto:Jkeyan-kaition@gmail.com"
                className="text-decoration-none ms-4"
              >
                <MdEmail className="mb-1" /> &nbsp;
                <span className="Information text-white">
                  Jkeyan-Kaition@gmail.com
                </span>
              </a>
            </div>
            <div
              className="col-2 text-flex-nowrap p-3"
              style={{ fontSize: "17px" }}
            >
              <div className="icon">
                <a
                  href="https://www.facebook.com"
                  className="social-link-icon text-white ms-3"
                >
                  <FaFacebookF />
                </a>{" "}
                &nbsp;
                <a href="https://twitter.com" className="text-white ms-3">
                  <FaTwitter />
                </a>{" "}
                &nbsp;
                <a href="https://www.youtube.com" className="text-white ms-3">
                  <FaYoutube />
                </a>{" "}
                &nbsp;
                <a href="https://www.pinterest.com" className="text-white ms-3">
                  <FaPinterestP />
                </a>{" "}
                &nbsp;
              </div>
            </div>
            <div className="col-2 text-flex-nowrap p-3">
              <Breadcrumbs aria-label="breadcrumb" className="mt-1">
                <MuiLink
                  underline="hover"
                  color="white"
                  href="#"
                  sx={{
                    "&:hover": {
                      textDecoration: "none",
                      color: "red",
                    },
                  }}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </MuiLink>
                <MuiLink
                  underline="hover"
                  color="white"
                  href="#"
                  sx={{
                    "&:hover": {
                      textDecoration: "none",
                      color: "red",
                    },
                  }}
                  onClick={() => changeLanguage('vi')}
                >
                  VN
                </MuiLink>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-nowrap">
          <div className="row">
            <div className="wrapper mt-2 p-0">
              <ul className="main-menu">
                <li
                  id="menu-item-6"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-6"
                >
                  <a href="/">
                    <img
                      src="https://demo031153.web30s.vn/datafiles/36872/upload/files/logo%20%282%29.png"
                      alt="Transland"
                    />
                  </a>
                </li>
                <li
                  id="menu-item-75"
                  className="ms-3 menu-item menu-item-type-post_type menu-item-object-page menu-item-75 mt-2"
                >
                  <RouterLink to="/" className="RouterLink">
                    {t("header.home page")}
                  </RouterLink>
                </li>

                <li
                  id="menu-item-76"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76 mt-2"
                >
                  <RouterLink to="/Introduce" className="RouterLink">
                    {t("header.introduce")}
                  </RouterLink>
                </li>

                <li
                  id="menu-item-76"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76 mt-2"
                >
                  <RouterLink to="/ServiceProduct" className="RouterLink">
                  {t("header.product")}
                  </RouterLink>
                </li>

                <li
                  id="menu-item-18"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-18 mt-2"
                >
                  <RouterLink to="/ServiceComponent" className="RouterLink">
                    {t("header.shipping services")}
                  </RouterLink>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-7"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7 mt-2"
                      style={{ width: "140%" }}
                    >
                      <RouterLink to="/Logistics" className="RouterLink">
                      {t("header.services logistics")}
                      </RouterLink>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14 mt-2"
                      style={{ width: "140%" }}
                    >
                      <RouterLink to="/Sea" className="RouterLink">
                      {t("header.services sea")}
                      </RouterLink>
                    </li>
                    <li
                      id="menu-item-16"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16 mt-2"
                      style={{ width: "140%" }}
                    >
                      <RouterLink to="/Fly" className="RouterLink">
                      {t("header.services air")}
                      </RouterLink>
                    </li>
                    <li
                      id="menu-item-17"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17 mt-2"
                      style={{ width: "140%" }}
                    >
                      <RouterLink to="/Rail" className="RouterLink">
                      {t("header.services railway")}
                      </RouterLink>
                    </li>
                  </ul>
                </li>

                <li
                  id="menu-item-21"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21 mt-2"
                >
                  <RouterLink to="/Newss" className="RouterLink">
                    {t("header.new")}
                  </RouterLink>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-19"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19 mt-2"
                    >
                      <a href="/News">{t("header.new")}</a>
                    </li>
                    <li
                      id="menu-item-20"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20 mt-2"
                    >
                      <a href="/Recruitment">{t("header.recruitment")}</a>
                    </li>
                  </ul>
                </li>

                <li
                  id="menu-item-77"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77 mt-2"
                >
                  <RouterLink to="/Contact" className="RouterLink">
                    {t("header.contact us")}
                  </RouterLink>
                </li>
                <li className="mt-3 ms-5">
                  <Breadcrumbs aria-label="breadcrumb" className="mt-1">
                    <RouterLink to="/SignIn" className="RouterLink">
                      {t("header.sign in")}
                    </RouterLink>
                    <RouterLink to="/SignUp" className="RouterLink">
                      {t("header.sign up")}
                    </RouterLink>
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
