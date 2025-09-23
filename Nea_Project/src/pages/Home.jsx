// src/pages/Home.js
import React from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="content">
        <div className="hero">
          <h1>This is home page</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
