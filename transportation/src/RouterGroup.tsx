import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import SignIn from "./Home/SignIn";
import SignUp from "./Home/SignUp";
import Body from "./Home/Body";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import ServiceComponent from "./Home/ServiceComponent";
import Logistics from "./Home/Logistics";
import Sea from "./Home/Sea";
import News from "./Home/New";
import Newss from "./Home/Newss";
import Recruitment from "./Home/Recruitment";
import Fly from "./Home/Fly";
import Rail from "./Home/Rail";
import Contact from "./Home/Contact";
import Introduce from "./Home/Introduce";
import VietnamEconomicReport from "./Home/New newspaper/VietnamEconomicReport";
import ChinaEconomicReport from "./Home/New newspaper/ChinaEconomicReport";
import LongAnexport from "./Home/New newspaper/LongAnexport";
import Ecommerce from "./Home/New newspaper/Ecommerce";
import Acv from "./Home/New newspaper/Acv";
import AirplaneTaxReduction from "./Home/New newspaper/AirplaneTaxReduction";
import WarehousePlayer from "./Home/New newspaper/WarehousePlayer";
import RecruitingSalesStaff from "./Home/New newspaper/RecruitingSalesStaff";
import { useQuery } from "@tanstack/react-query";
import NavAdmin from "./Admin/NavAdmin";
import AdminService from "./Admin/AdminService";
import ServiceType from "./Admin/ServiceType";

const RouterGroup: React.FC = () => {
  const [showElement, setShowElement] = useState(true); // State để kiểm soát hiển thị của phần tử

  useEffect(() => {
    // Kiểm tra đường dẫn hiện tại
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/NavAdmin") || currentPath.startsWith("/AdminService") || currentPath.startsWith("/ServiceType") ) {
      setShowElement(false);
    } else {
      // Nếu không, hiển thị phần tử
      setShowElement(true);
    }
  }, []);
  // useEffect(() => {
  //   fetchApi();
  // }, []);
  const fetchApi = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/service/getAllProduct`
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });
  console.log("query", query);

  return (
    <>
      <Router>
        <div className="RouterContainer">
          {/* Hiển thị header nếu showHeader là true */}
          {/* Phần tử cần ẩn */}
          {showElement && <Header />}
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/NavAdmin" element={<NavAdmin />} />
            <Route path="/AdminService" element={<AdminService />} />
            <Route path="/ServiceType" element={<ServiceType />} />
            <Route path="/ServiceComponent" element={<ServiceComponent />} />
            <Route path="/Logistics" element={<Logistics />} />
            <Route path="/Sea" element={<Sea />} />
            <Route
              path="/VietnamEconomicReport"
              element={<VietnamEconomicReport />}
            />
            <Route
              path="/ChinaEconomicReport"
              element={<ChinaEconomicReport />}
            />
            <Route path="/LongAnexport" element={<LongAnexport />} />
            <Route path="/Acv" element={<Acv />} />
            <Route
              path="/AirplaneTaxReduction"
              element={<AirplaneTaxReduction />}
            />
            <Route path="/WarehousePlayer" element={<WarehousePlayer />} />
            <Route
              path="/RecruitingSalesStaff"
              element={<RecruitingSalesStaff />}
            />
            <Route path="/Ecommerce" element={<Ecommerce />} />
            <Route path="/Fly" element={<Fly />} />
            <Route path="/Rail" element={<Rail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/Recruitment" element={<Recruitment />} />
            <Route path="/News" element={<News />} />
            <Route path="/Newss" element={<Newss />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default RouterGroup;
