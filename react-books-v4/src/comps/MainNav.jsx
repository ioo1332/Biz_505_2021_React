import React from "react";
import "../css/MainNav.css";
import { NavLink } from "react-router-dom";

function MainNav() {
  /**
   * 네비게이션 모양 지정
   */
  return (
    <nav className="main_nav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/insert" exact>
        Insert
      </NavLink>
      <NavLink to="/list" exact>
        List View
      </NavLink>
    </nav>
  );
}

export default MainNav;
