import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from './components/Login/Login';
import Cafes from './components/Table/Table';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cafes" element={<Cafes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
