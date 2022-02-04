import React, { Component } from "react";
import logo from "../logo.png";
export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.imdb.com/">
            <img
              src={logo}
              alt="IMBD"
              style={{ width: 100, display: "block", margin: "auto" }}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/movies">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/stars">
                  Stars
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-6"
                type="text"
                placeholder="Search"
              ></input>
              <button className="btn btn-secondary my-6 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>

          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/login">
                <button
                  className="btn btn-secondary my-6 my-sm-0"
                  type="button"
                >
                  Sign In
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
