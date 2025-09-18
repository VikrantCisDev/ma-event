import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ListingVendors from "./pages/ListingVendors/ListingVendors";
import VendorsPage from "./pages/VendorsPage/VendorsPage";
import VendorCategory from "./pages/VendorCategory/VendorCategory";
import Layout from "./components/ui/Layout";
import Test from "./pages/Test/Test";
import Login from "./pages/AuthPages/Login";
import Signup from "./pages/AuthPages/Signup";
import ForgotPassword from "./pages/AuthPages/ForgotPass";
import PlanningTools from "./pages/PlanningToolsPage/PlanningTools";
import AddVendorPage from "./pages/AddVendor/AddVendorPage";
import Faq from "./pages/Faq/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>}></Route>
          <Route path="/login" element={<Layout><Login /></Layout>}></Route>
          <Route path="/signup" element={<Layout><Signup /></Layout>}></Route>
          <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>}></Route>
          <Route path="/vendors-listing" element={<Layout><ListingVendors /></Layout>}></Route>
          <Route path="/vendorpage" element={<Layout><VendorsPage /></Layout>}></Route>
          <Route path="/add-vendor" element={<Layout><AddVendorPage /></Layout>}></Route>
          <Route path="/vendor-categories" element={<Layout><VendorCategory /></Layout>}></Route>
          <Route path="/planning-tools" element={<Layout><PlanningTools /></Layout>}></Route>
          <Route path="/faq" element={<Layout><Faq /></Layout>}></Route>
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>}></Route>
          <Route path="/terms-conditions" element={<Layout><TermsAndConditions /></Layout>}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="*" element={<h1>Error 404 page not found!!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
