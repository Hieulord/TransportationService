import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./Footer";

const Home = () => {
    return ( 
        <>
            <Router>
            <Header/>
            <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
    <Footer/>
    </Router>
        </>
     );
}

 
export default Home;