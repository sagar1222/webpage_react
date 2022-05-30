import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About US
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">
          Services
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">
          Search
        </NavLink>
        <NavLink activeClassName="active_class" to="/user">
          User
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact US
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/LogIn">
          Login
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/SignUp">
          SignUp
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
