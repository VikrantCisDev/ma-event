import React from 'react'
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListingVendors from './pages/ListingVendors/ListingVendors';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/listingvendors" element={<ListingVendors />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App