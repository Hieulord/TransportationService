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

function RouterGroup() {
  return (
    <>
      <Router>
        <div className="RouterContainer">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
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
            <Route path="/RecruitingSalesStaff" element={<RecruitingSalesStaff />} />
            <Route path="/Ecommerce" element={<Ecommerce />} />
            <Route path="/Fly" element={<Fly />} />
            <Route path="/Rail" element={<Rail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/Recruitment" element={<Recruitment />} />
            <Route path="/News" element={<News />} />
            <Route path="/Newss" element={<Newss />} />
            <Route path="/ServiceComponent" element={<ServiceComponent />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default RouterGroup;
