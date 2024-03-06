import React from "react";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
// import "Footer.css";
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
    <section id="footer ">
      <div className="container footer-container mt-5 pt-3">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-5 py-5">
          <div className="col-md-4 mt-5 mt-md-0">
            <img
              src="https://demo031153.web30s.vn/datafiles/36872/upload/files/logo%20%282%29.png"
              alt="Transland"
            />
            <p>
              🌐 Easy, convenient, and secure transportation - Connecting every
              place to every destination because we understand the value of each
              journey of yours! 🚚✨ Fast, reliable, and always on the move!
              🕒🌍.
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
            <h5 className="py-3">Our services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Logistic road transport
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Sea shipping
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Air transportation
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Rail transport
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="py-3">Quick links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Our locations
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  About us
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Our gallery
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link fw-normal p-0">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="py-3">Contact Info</h5>
            <ul className="nav flex-column">
              <li className="nav-item d-flex mb-4">
                <FaMapMarkerAlt className="me-2" />{" "}
                <a href="#" className="nav-link p-0">
                  163 Elm Drive, NYC, USA
                </a>
              </li>
              <li className="nav-item d-flex mb-4">
                <FaPhoneAlt className="me-2" />{" "}
                <a href="#" className="nav-link p-0">
                  (+089) 234-516-6123
                </a>
              </li>
              <li className="nav-item d-flex mb-4">
                <FaEnvelope className="me-2" />{" "}
                <a href="#" className="nav-link p-0">
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
            <p>© 2023 Roofers - All rights reserved</p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <p className="">
              © 2023 Website By:{" "}
              <a
                href="https://templatesjungle.com/"
                className="website-link"
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
