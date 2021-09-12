import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todos">
            Todos
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);