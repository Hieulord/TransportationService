import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Home/SignIn";
import SignUp from "./Home/SignUp";
import Body from "./Home/Body";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
function RouterGroup() {
  return (
    <>
      <Router>
        <div className="RouterContainer">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
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
