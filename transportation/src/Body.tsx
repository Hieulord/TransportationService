import { green } from "@mui/material/colors";
import React from "react";
import imgurl from "./images/b1.jpg";
const Body = () => {
  return (
    <>
      <section
        className="position-relative overflow-hidden py-4"
        style={{
          backgroundImage: `url(${imgurl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Uncomment the pattern overlay if needed */}
        {/* <div className="pattern-overlay pattern-right position-absolute">
          <img src="images/pattern-hero.png" alt="pattern" />
        </div> */}
        <div className="container py-5 mt-5">
          <div className="row align-items-center py-5 mt-5">
            <div className="col-md-6 mb-5 mb-md-0">
              <h6 className="text-white">
                SOLUTION FOR QUALITY TRANSPORTATION
              </h6>
              <h4 className="text-white fw-bold display-2">
              Flexible professional services tailored to your needs.
              </h4>
              <p className="text-white">
              An optimistic and effective approach to ensuring the highest quality transportation. With a team of transportation experts,
               we commit to providing reliable transport services, from sagittis pulvinar to dis venenatis. We support Nunc vitae aliquam vestibulum,
               delivering an Elite and secure transportation experience, not just a service but a trustworthy partner for all your needs.
              </p>
              <ul className="list-unstyled">
                <li className="text-white fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Fully licensed and insured for legal peace of mind.
                </li>
                <li className="text-white fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  A 100% reliable and transparent company you can count on.
                </li>
                <li className="text-white fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Genuine, transparent, and trustworthy.
                </li>
              </ul>
            </div>
            <div
              className="col-md-5 offset-md-1"
              style={{ backgroundColor: "gray" }}
            >
              <form className="hero-form p-5">
                <h3>Get started</h3>
                <div className="mb-4">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mb-0"
                  >
                    First Name
                  </label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="exampleInputEmail1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail2"
                    className="form-label mb-0"
                  >
                    Last Name
                  </label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="exampleInputEmail2"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail3"
                    className="form-label mb-0"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="exampleInputEmail3"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail4"
                    className="form-label mb-0"
                  >
                    Phone
                  </label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="exampleInputEmail4"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail5"
                    className="form-label mb-0"
                  >
                    Message
                  </label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="exampleInputEmail5"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Let’s get started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
