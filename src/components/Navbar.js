import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="toggleSwitch"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="toggleSwitch "
            >
              {`Enable ${
                props.mode === "light"
                  ? "dark"
                  : props.mode === "success"
                  ? "dark"
                  : props.mode === "danger"
                  ? "dark"
                  : "light"
              } Mode`}
            </label>
          </div>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="greenSwitch"
              onClick={props.toggleGreen}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="greenSwitch"
            >
              {`Enable ${
                props.mode === "light"
                  ? "green"
                  : props.mode === "dark"
                  ? "green"
                  : props.mode === "danger"
                  ? "green"
                  : "light"
              } Mode`}
            </label>
          </div>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="redSwitch"
              onClick={props.toggleDanger}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="redSwitch"
            >
              {`Enable ${
                props.mode === "light"
                  ? "Red"
                  : props.mode === "success"
                  ? "Red"
                  : props.mode === "dark"
                  ? "Red"
                  : "light"
              } Mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
