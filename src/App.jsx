import React from 'react'
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListingVendors from './pages/ListingVendors/ListingVendors';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorsPage from './pages/VendorsPage/VendorsPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/listingvendors" element={<ListingVendors />}></Route>
          <Route path="/vendorpage" element={<VendorsPage />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App