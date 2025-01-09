import React from 'react'
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App