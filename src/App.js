import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from './components/Login/Login';
import Table from './components/Table/Table';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cafes" element={<Table/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
