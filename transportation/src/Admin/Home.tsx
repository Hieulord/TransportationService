import avatarImage from "../Avatar/avatar-11.jpg";
import React from "react";
import { Container, Navbar, Nav, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiLayout,
  FiMonitor,
  FiClipboard,
  FiGitPullRequest,
  FiDownload,
} from "react-icons/fi"; // Importing icons from react-icons
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { Form, FormControl, Button, Dropdown } from "react-bootstrap";
const Home = () => {
  return (
    <>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navbar-vertical navbar text-primary"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column accordion">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="active">
                <FiHome className="nav-icon" /> {/* Using FiHome icon */}
                Bảng điều khiển
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="navbar-heading">BỐ CỤC & TRANG</div>
            </Nav.Item>
            <Accordion>
              <Accordion.Header>
                <FiLayout className="nav-icon me-2" />{" "}
                {/* Using FiLayout icon */}
                Trang
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column list-group">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/pages/profile">
                      Hồ sơ
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/pages/settings">
                      Cài đặt
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/pages/billing">
                      Thanh toán
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/pages/pricing">
                      Định giá
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/404">
                      Lỗi 404
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Accordion.Body>
            </Accordion>
            <Nav.Item>
              <Nav.Link as={Link} to="/layouts/layout-vertical">
                <FiLayout className="nav-icon me-2" />{" "}
                {/* Using FiLayout icon */}
                Bố cục
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="navbar-heading">THÀNH PHẦN UI</div>
            </Nav.Item>
            <Accordion>
              <Accordion.Header>
                <FiMonitor className="nav-icon me-2" />{" "}
                {/* Using FiMonitor icon */}
                Các thành phần
              </Accordion.Header>
              <Accordion.Body>
                <Nav className="flex-column list-group">
                  <Nav.Link as={Link} to="/components/accordions">
                    đàn accordion
                  </Nav.Link>
                </Nav>
              </Accordion.Body>
            </Accordion>
            <Nav.Item>
              <div className="navbar-heading">Tài liệu</div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/documentation">
                <FiClipboard className="nav-icon me-2" />{" "}
                {/* Using FiClipboard icon */}
                Tài liệu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/changelog">
                <FiGitPullRequest className="nav-icon me-2" />{" "}
                {/* Using FiGitPullRequest icon */}
                Nhật ký thay đổi
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://codescandy.gumroad.com/l/dashui-nextjs">
                <FiDownload className="nav-icon me-2" />{" "}
                {/* Using FiDownload icon */}
                Tải xuống
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>

  );
};

export default Home;
