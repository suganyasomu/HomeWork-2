import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    


<nav className="navbar navbar-expand">


<a className="navbar-brand" href="#">
  <img
    src="https://st3.depositphotos.com/26374354/33252/v/450/depositphotos_332520406-stock-illustration-initials-s-or-ss-logo.jpg"
    alt=""/>
</a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>


<div className="collapse navbar-collapse" id="navbarNav">
  <div className="mr-auto"></div>

  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/about">aboutMe</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/contact">contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/portfolio">Portfolio</a>
    </li>

  </ul>
</div>
</nav>

  );
}

export default Navbar;
