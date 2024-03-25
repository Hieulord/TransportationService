import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import NavAdmin from "./NavAdmin";
import { Container, Row, Col } from "react-bootstrap";
import { HiOutlineTrendingUp } from "react-icons/hi";
const Home = () => {
  const [data, setData] = useState({
    thisWeek: [5, 10, 15, 20, 25],
    lastWeek: [4, 8, 12, 16, 20],
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
          <div className="col-2 d-flex justify-content align-items-start mt-2">
            <NavAdmin />
          </div>

          <div className="col-10">
            <div className="container card-body">
              <div className="text-center">
                <h2 className="mt-3 mb-3">Hiệu Suất</h2>
              </div>
              <div className="chartjs-wrapper mt-5">
                <canvas
                  ref={chartRef}
                  id="performaneLine"
                  width="1112"
                  height="300"
                  className="chartjs-render-monitor"
                ></canvas>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
