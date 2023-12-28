import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Navmobile from "./components/Navbar/mobileview";
import Home from "./components/Home/Home";
// import GemsDisplay from "./components/Gemspage/GemsDisplay";
import Aboutus from "./components/About-us/aboutus";
import DiamondsHome from "./components/Diamonds/Diamondspage/DiamondsHome";
import Zodiachome from "./components/Astrology-demo/zodiacpage/zodiachome";
import ProductDetails from "./components/Productfullview/ProductDetails";
import Beadsmain from "./components/Beads/beadsmain";
// import Beadssub from "./components/Beads/beadssubpage";
import Coralmain from "./components/corals/coralsmainhome";
import AdminTemplate from "./components/Admin/AdminDashboard";
import JewelryMain from "./components/jewelry/jewelryMain";
import ShoppingCart from "./components/Cart/ShoppingCart";
import PearlsHome from "./components/Perals/PearlsHome";
import AdminLoginForm from "./components/Admin/AdminLogin";
import Login from "./components/Home/Login";

const Layout = ({ children, userData }) => (
  <>
    <Navbar userData={userData} />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  userData: PropTypes.object, // Add the prop type for userData
};
const App = () => {
  const [userData, setUserData] = useState(null);

  const handleLogin = (user) => {
    setUserData(user);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <Login onLogin={handleLogin} />
            </Layout>
          }
        />
        {/* Non-admin routes with Layout component */}
        <Route
          path="/mobile"
          element={
            <Layout>
              <Navmobile />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout userData={userData}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/gems"
          element={
            <Layout>
              <GemGrid />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/diamonds"
          element={
            <Layout>
              <DiamondsHome />
            </Layout>
          }
        />
        <Route
          path="/astrology"
          element={
            <Layout>
              <Zodiachome />
            </Layout>
          }
        />
        <Route
          path="/diamondscart"
          element={
            <Layout>
              <ProductDetails/>
            </Layout>
          }
        />
        <Route
          path="/beads"
          element={
            <Layout>
              <Beadsmain />
            </Layout>
          }
        />
      
        <Route
          path="/peralhome"
          element={
            <Layout>
              <PearlsHome />
            </Layout>
          }
        />

        <Route
          path="/corals"
          element={
            <Layout>
              <Coralmain />
            </Layout>
          }
        />
        <Route
          path="/jewelery"
          element={
            <Layout>
              <JewelryMain />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <ShoppingCart />
            </Layout>
          }
        />
        {/* Route for the Login component without Layout */}
        {/* Admin routes */}
        <Route path="/admin-login" element={<AdminLoginForm />} />
        <Route path="/admin/*" element={<AdminTemplate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
