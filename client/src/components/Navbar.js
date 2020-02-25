import React, { useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import M from "materialize-css";

export const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const isActive = (history, path) => {
    if (history.location.pathname === path)
      return { color: "#ba68c8", fontWeight: "bold" };
  };

  const logoutHandler = event => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <nav className="row light blue" role="navigation">
      <div className="nav-wrapper container">
        <NavLink
          to="/home"
          className=" text-shadow brand-logo"
          style={{ marginTop: 15 }}
        >
          MediaShore
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/media/new">
              <button
                style={isActive(history, "/media/new")}
                className="btn-floating blue"
              >
                {/* <AddBoxIcon style={{ marginRight: "8px" }} />  */}
                <i class="material-icons">add</i>
                Add Media
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink style={isActive(history, "/")} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={isActive(history, "/users")} to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink style={isActive(history, "/profile")} to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <NavLink style={isActive(history, "/home")} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={isActive(history, "/users")} to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink style={isActive(history, "/profile")} to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
        <a href="/" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};
