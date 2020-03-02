import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Note</Link>
      <Link to="/singlenote">View Note</Link>
    </nav>
  );
}

export default Navigation;
