import "./Navbar.css";

import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

export default function Navbar({showLogin,setShowLogin}) {
  const [menu, setMenu] = useState("home");

  const handleMouseHover = (value) => {
    setMenu(value);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/"
          onClick={()=>setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a href="#menu"
          onClick={()=>setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={()=>setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={()=>setMenu("contact-us")}
        //   onMouseLeave={()=>setMenu("")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-bar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(!showLogin)}>sign in</button>
      </div>
    </div>
  );
}
