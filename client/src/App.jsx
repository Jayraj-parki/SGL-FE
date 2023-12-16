import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import GemsDisplay from "./components/Gemspage/GemsDisplay";
import Footer from "./components/Footer/footer";
import Aboutus from "./components/About-us/aboutus";
import DiamondsDisplay from "./components/Diamonds/Diamondspage/DiamondGridDisplay";
import Zodiachome from "./components/Astrology-demo/zodiacpage/zodiachome";
import DiamondCaratDisplay from "./components/Diamonds/Diamondcarat/DiamondCaratDisplay";
import Beadsmain from "./components/Beads/beadsmain";
import Beadssub from "./components/Beads/beadssubpage";
import Zodiacsubpage from "./components/Astrology-demo/zodiacpage/zodiacsubpage";
import Coralmain from "./components/corals/coralsmainhome";
import Blogs from "./components/Admin/Blogs";
import Inventory from "./components/Admin/inventory";
import Orders from "./components/Admin/Orders";
import AdminLoginForm from "./components/Admin/AdminLogin";
import JewelryMain from "./components/jewelry/jewelryMain";
import ShoppingCart from "./components/Cart/Cart";
import Navmobile from "./components/Navbar/mobileview";
import PearlsHome from "./components/Perals/PearlsHome";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/mobile" element={<Navmobile />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gems" element={<GemsDisplay />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/diamonds" element={<DiamondsDisplay />}></Route>
          <Route path="/astrology" element={<Zodiachome />}></Route>
          <Route path="/diamondscart" element={<DiamondCaratDisplay />}></Route>
          <Route path="/beads" element={<Beadsmain />}></Route>
          <Route path="/beadssub" element={<Beadssub />}></Route>
          <Route path="/peralhome" element={<PearlsHome />}></Route>
          <Route path="/zodiacsub" element={<Zodiacsubpage />}></Route>
          <Route path="/corals" element={<Coralmain />}></Route>
          <Route path="/corals" element={<JewelryMain />}></Route>
          <Route path="/catrcontainer" element={<ShoppingCart />}></Route>
          <Route path="/jewelery" element={<JewelryMain />}></Route>
          {/*Admin  */}
          <Route path="/admin-login" element={<AdminLoginForm />}></Route>
          <Route path="/admin" element={<Inventory />}></Route>
          <Route path="/admin/blogs" element={<Blogs />}></Route>
          <Route path="/admin/orders" element={<Orders />}></Route>

          <Route path="/cart" element={<ShoppingCart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
