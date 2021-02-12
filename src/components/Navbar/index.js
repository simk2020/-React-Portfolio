import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      
      <a className="navbar-brand" href="/">Simran Sehdev</a>
      <a className="navbar-brand" href="/about"> About</a>
      <a className="navbar-brand" href="/portfolio">Portfolio</a>
      <a className="navbar-brand" href="/contact">Contact me!</a>  
    </nav>
  );
}

export default Navbar;
