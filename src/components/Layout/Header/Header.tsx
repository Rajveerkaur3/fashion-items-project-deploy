import React from "react";
import logo from "../../../assets/Website Logo.jpg";
import Nav from "../../NavBar/Nav"; 
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <>
      
      <Nav />

      <header className="header">
        
        <div className="logo-container">
          <h1 className="team-name">Trend Aura</h1>
          <img src={logo} alt="Website Logo" className="logo" />
        </div>

        
        <div className="header-right">
          <button>❤️ Favorites</button>
          <button>🛒 Cart</button>
        </div>
      </header>
    </>
  );
};
