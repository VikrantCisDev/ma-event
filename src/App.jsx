import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListingVendors from "./pages/ListingVendors/ListingVendors";
import "bootstrap/dist/css/bootstrap.min.css";
import VendorsPage from "./pages/VendorsPage/VendorsPage";
import VendorCategory from "./pages/VendorCategory/VendorCategory";
import Layout from "./components/ui/Layout";
import Test from "./pages/Test/Test";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>}></Route>
          <Route path="/login" element={<><Login /></>}></Route>
          <Route path="/signup" element={<><Signup /></>}></Route>
          <Route path="/listingvendors" element={<Layout><ListingVendors /></Layout>}></Route>
          <Route path="/vendorpage" element={<Layout><VendorsPage /></Layout>}></Route>
          <Route path="/vendor-categories" element={<Layout><VendorCategory /></Layout>}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="*" element={<h1>Error 404 page not found!!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
