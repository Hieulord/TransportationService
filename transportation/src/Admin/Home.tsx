import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import NavAdmin from "./NavAdmin";
import AVT from "../Avatar/avatar-16.jpg";
import { Navbar, Nav, Dropdown, Button, Form } from "react-bootstrap";
import { FiBell } from "react-icons/fi";
import {
  FaChartLine,
  FaChartBar,
  FaChartArea,
  FaChartPie,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Style } from "@mui/icons-material";

const notificationContent = (
  <Dropdown.Menu>
    <Dropdown.Item>Hiếu đã làm vỡ hàng.</Dropdown.Item>
    {/* Thêm thông báo về các nhân viên khác nếu cần */}
  </Dropdown.Menu>
);

const Home = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "text-primary",
    "text-danger",
    "text-warning",
    "text-info",
    "text-success",
  ];

  const handleLogout = () => {
    // Xử lý logic đăng xuất ở đây
    // Chuyển hướng đến trang SignIn khi đăng xuất
    window.location.href = "/SignIn";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [colorIndex, colors.length]);

  const [data, setData] = useState({
    thisWeek: [5, 55, 20, 35, 20],
    lastWeek: [5, 40, 15, 30, 25],
  });
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null); // Maintain reference to Chart instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("URL_TO_YOUR_DATA_ENDPOINT");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      // Destroy existing chart instance before creating a new one
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          datasets: [
            {
              label: "This Week",
              data: data.thisWeek,
              backgroundColor: "rgba(31, 59, 179, 0.2)",
              borderColor: "rgba(31, 59, 179, 1)",
              borderWidth: 1,
            },
            {
              label: "Last Week",
              data: data.lastWeek,
              backgroundColor: "rgba(82, 205, 255, 0.2)",
              borderColor: "rgba(82, 205, 255, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <header
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#0b3d66", height: "90px" }}
      >
        <h1>𝕎𝕖𝕝𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝔸𝕕𝕞𝕚𝕟 𝕂𝕒𝕚𝕥𝕚𝕠𝕟.𝕁𝕜𝕖𝕪𝕒𝕟-𝕌ℕ𝕚𝕧𝕖𝕣 </h1>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-flex align-items-start mt-2">
            <NavAdmin />
          </div>

          <div className="col-10">
            <div className="card-body">
              <Navbar className="justify-content-between">
                <Nav className="ms-2">
                  <Nav.Item className="stopevent">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdownNotification"
                      >
                        <FiBell size={25} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>{notificationContent}</Dropdown.Menu>
                    </Dropdown>
                  </Nav.Item>
                </Nav>

                <Nav.Item>
                  <img
                    src={AVT}
                    alt="User Avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px", // Thêm khoảng cách giữa hình ảnh và nút đăng xuất
                    }}
                  />
                  <Button variant="danger" onClick={handleLogout}>
                    Đăng xuất
                  </Button>
                </Nav.Item>
              </Navbar>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="border" style={{ maxWidth: "100%" }}>
                  {/* Thêm lớp h-100 để thẻ card có chiều cao bằng với chiều cao của hàng */}
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="ms-3">
                      {/* Thêm lớp w-100 để các phần tử bên trong thẻ card có chiều rộng bằng với thẻ card */}
                      <h5 className=" text-primary">
                        Xin chúc mừng Jkeyan.UNIver! 🎉
                      </h5>
                      <p className="text">
                        Hôm nay bạn đã bán được thêm 72% cổ phần cty🤩.
                        <br />
                        Kiểm tra huy hiệu nâng cao mới vừa được cập tại trong hồ
                        sơ của bạn.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mt-4"
                      >
                        Xem huy hiệu
                      </button>
                    </div>
                    <div className="text-md-end">
                      <img
                        src={AVT}
                        height="175"
                        className="john-illustration"
                        alt="John Illustration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3
                className={`mt-3 mb-3 display-4 ${colors[colorIndex]} font-weight-bold`}
              >
                HIỆU SUẤT
              </h3>
            </div>
            <div className="chartjs-wrapper mt-5 card-body">
              <canvas
                ref={chartRef}
                id="performaneLine"
                width="1112"
                height="300"
                className="chartjs-render-monitor"
              ></canvas>
            </div>
            <div className="container-fluid pt-4 px-4">
              <div className="row g-4">
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <FaChartLine className="text-primary" size={48} />
                    <div className="ms-3">
                      <p className="mb-2">Today Sale</p>
                      <h6 className="mb-0">$1234</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <FaChartBar className="text-primary" size={48} />
                    <div className="ms-3">
                      <p className="mb-2">Total Sale</p>
                      <h6 className="mb-0">$1234</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <FaChartArea className="text-primary" size={48} />
                    <div className="ms-3">
                      <p className="mb-2">Today Revenue</p>
                      <h6 className="mb-0">$1234</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <FaChartPie className="text-primary" size={48} />
                    <div className="ms-3">
                      <p className="mb-2">Total Revenue</p>
                      <h6 className="mb-0">$1234</h6>
                    </div>
                  </div>
                </div>
                <div className="bg-primary card-rounded">
                  <div className="card-body pb-0">
                    <h4 className="card-title card-title-dash text-white mb-4">
                      Status Summary
                    </h4>
                    <div className="row">
                      <div className="col-sm-4">
                        <p className="status-summary-ight-white mb-1">
                          Closed Value
                        </p>
                        <h2 className="text-info">357</h2>
                      </div>
                      <div className="col-sm-8">
                        <div className="status-summary-chart-wrapper pb-4">
                          <Line data={chartData} options={options} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
