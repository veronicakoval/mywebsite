import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from "react";
import NYC from "./pages/NYC";
import Ireland from "./pages/ireland";
import AboutMe from "./pages/aboutme";
import Navbar from "./components/navbar";
import walking_dog from "./pictures/walking_dog.gif";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./styles.css";

// Add the Home component right in App.jsx
function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img 
        src={walking_dog}  
        alt="Walking dog animation"
        className="w-64 h-64"
      />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <div>
        <Routes>
          {/* Add the home route as the first route */}
          <Route path="/" element={<Home />} />
          <Route path="/NYC" element={<NYC />} />
          <Route path="/Ireland" element={<Ireland />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;