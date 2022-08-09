import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./stylesNavbar.css"

const Navbar = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="row justify-content-around w-75">
            <div className="col-5">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>
        <div className ="col-2">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Contact via e-mail</a></li>
                <li><a className="dropdown-item" href="#">Assist page</a></li>
                <li><a className="dropdown-item" href="#">Tonto el que lo lea</a></li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
      </div>
  </nav>)
}
export default Navbar