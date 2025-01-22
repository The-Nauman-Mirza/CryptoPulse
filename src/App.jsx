import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import SignUp from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation(); // Hook to get the current path

  // Define paths where the footer should be excluded
  const noFooterPaths = ["/signup", "/login"];
  const shouldShowFooter = !noFooterPaths.includes(location.pathname);

  return (
    <div className="app">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {shouldShowFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

export default App;



