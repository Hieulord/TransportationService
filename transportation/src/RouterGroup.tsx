import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import NavAdmin from "./Admin/NavAdmin";
import AdminService from "./Admin/AdminService";
import Home from "./Admin/Home";
import User from "./Admin/User";
import Client from "./Admin/Client";
import Staff from "./Admin/Staff";
import StaffType from "./Admin/StaffType";
import ServiceProduct from "./Home/ServiceProduct";
import ServiceType from "./Admin/ServiceType";
import Order from "./Admin/Order";
import Detail from "./Home/Detail";


const RouterGroup: React.FC = () => {
  const [showElement, setShowElement] = useState(true); // State để kiểm soát hiển thị của phần tử
  
  useEffect(() => {
    // Kiểm tra đường dẫn hiện tại
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/NavAdmin") || currentPath.startsWith("/AdminService") || currentPath.startsWith("/ServiceType") || currentPath.startsWith("/Home") || currentPath.startsWith("/Order")
    || currentPath.startsWith("/home") || currentPath.startsWith("/StaffType") || currentPath.startsWith("/Staff") || currentPath.startsWith("/Client") || currentPath.startsWith("/User") ) {
      setShowElement(false);
    } else {
      // Nếu không, hiển thị phần tử
      setShowElement(true);
    }
  });
  
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
            <Route path="/Order" element={<Order />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/User" element={<User />} />
            <Route path="/Client" element={<Client />} />
            <Route path="/Staff" element={<Staff />} />
            <Route path="/StaffType" element={<StaffType />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="/ServiceProduct" element={<ServiceProduct />} />
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
