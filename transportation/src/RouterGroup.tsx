import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Home/SignIn";
import SignUp from "./Home/SignUp";
import Body from "./Home/Body";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

import ServiceComponent from "./Home/ServiceComponent";
import Logistics from "./Home/Logistics";
import Sea from "./Home/Sea";
import Fly from "./Home/Fly";
import Rail from "./Home/Rail";
import Contact from "./Home/Contact";
import Introduce from "./Home/Introduce";


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
            <Route path="/Fly" element={<Fly />} />
            <Route path="/Rail" element={<Rail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Introduce" element={<Introduce />} />
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
