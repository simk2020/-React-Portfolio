import React from "react";
import "./style.css";
import {link} from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <a class="navbar-brand navbarcolor" href="index.html">Simran Sehdev</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbarcolor navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">About Me <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact me</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
