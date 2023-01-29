import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Snack or Booze
        </Link>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink to="/snacks" className="pe-2">Snacks</NavLink>
            <NavLink to="/drinks" className="pe-2">Drinks</NavLink>
            <NavLink to="/additem" className="pe-2">Add Item</NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>
  );
}

export default NavBar;