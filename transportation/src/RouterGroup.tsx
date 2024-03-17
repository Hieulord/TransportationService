import React, { useEffect } from "react";
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
import News from "./Home/News";
import Recruitment from "./Home/Recruitment";
import Fly from "./Home/Fly";
import Rail from "./Home/Rail";
import Contact from "./Home/Contact";
import Introduce from "./Home/Introduce";
import { useQuery } from "@tanstack/react-query";

const RouterGroup: React.FC = () => {
  // useEffect(() => {
  //   fetchApi();
  // }, []);
  const fetchApi = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/service/getAllProduct`
      );
      return res.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  console.log('query', query)

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
            <Route path="/Recruitment" element={<Recruitment />} />
            <Route path="/News" element={<News />} />
            <Route path="/ServiceComponent" element={<ServiceComponent />} />
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
