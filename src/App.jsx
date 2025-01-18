import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from "react";
import NYC from "./pages/NYC";
import Ireland from "./pages/ireland";
import AboutMe from "./pages/aboutme";
import Navbar from "./components/navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/NYC" element={<NYC />} />
          <Route path="/Ireland" element={<Ireland />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
