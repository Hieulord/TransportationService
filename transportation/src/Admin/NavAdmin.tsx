import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navAdmin.css";
import { Container, Navbar, Nav, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiHome, FiLayout, FiMonitor, FiClipboard } from "react-icons/fi"; // Importing icons from react-icons
const NavAdmin = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // style={{ backgroundColor: "#0b3d66" }}
        variant="light"
        className="navbar-vertical text-primary"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-column accordion">
              <Nav.Item>
                <Nav.Link as={Link} to="/Home" className="active">
                  <FiHome className="nav-icon" /> {/* Using FiHome icon */}
                  Bảng điều khiển
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <div className="navbar-heading">DANH SÁCH & DỊCH VỤ</div>
              </Nav.Item>
              <Accordion>
                <Accordion.Header>
                  <FiLayout className="nav-icon me-2" />
                  {/* Using FiLayout icon */}
                  Danh Sách
                </Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column list-group">
                    <Nav.Item>
                      <Nav.Link as={Link} to="/AdminService">
                        Danh sách dịch vụ
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/ServiceType">
                        Danh sách loại dịch vụ
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Order">
                        Danh sách đơn hàng
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Client">
                        Danh sách khách hàng
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Accordion.Body>
              </Accordion>
              <Nav.Item>
                <div className="navbar-heading">QUẢN LÝ NHÂN VIÊN</div>
              </Nav.Item>
              <Accordion>
                <Accordion.Header>
                  <FiMonitor className="nav-icon me-2" />
                  {/* Using FiMonitor icon */}
                  Danh sách
                </Accordion.Header>
                <Accordion.Body>
                  <Nav className="flex-column list-group">
                    <Nav.Link as={Link} to="/Staff">
                      Danh sách nhân viên
                    </Nav.Link>
                  </Nav>
                  <Nav className="flex-column list-group">
                    <Nav.Link as={Link} to="/StaffType">
                      Loại nhân viên
                    </Nav.Link>
                  </Nav>
                </Accordion.Body>
              </Accordion>
              <Nav.Item>
                <div className="navbar-heading">QUẢN LÝ DỮ LIỆU</div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/User">
                  <FiClipboard className="nav-icon me-2" />
                  {/* Using FiClipboard icon */}
                  Danh sách tài khoản khách hàng
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavAdmin;
