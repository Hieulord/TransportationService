import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navAdmin.css";
const NavAdmin = () => {
  return (
    <>
      <section
        className="container-fuild p-3"
        style={{ backgroundColor: "#0b3d66" }}
      >
        <div className="d-flex flex-nowrap">
          <h3 className="text-white mt-1">Admin</h3>
          <nav className="text-nowrap ms-3">
            <ul className="navbar-nav" style={{ listStyleType: "none" }}>
              <li style={{ marginTop: "3px", fontWeight: "600" }}>
                <a
                  href="/Home"
                  className="text-decoration-none text-white fs-4"
                >
                  Trang Chủ
                </a>
              </li>
              <li style={{ marginTop: "3px", fontWeight: "600" }}>
                <a
                  href="/AdminService"
                  className="text-decoration-none text-white fs-4"
                >
                  Dịch Vụ
                </a>
              </li>
              <li style={{ marginTop: "3px", fontWeight: "600" }}>
                <a href="/ServiceType" className="text-decoration-none text-white fs-4">
                  Loại Dịch Vụ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default NavAdmin;
