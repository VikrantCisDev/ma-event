import React from 'react'
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import New from './pages/HomePage/New'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/new" element={<New />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App