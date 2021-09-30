import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <BrowserRouter>
      <ul className="main_menu">
        <li>Home</li>
        <li>Insert</li>
        <li>List View</li>
      </ul>
    </BrowserRouter>
  );
}

export default MainNav;
