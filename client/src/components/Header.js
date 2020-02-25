import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="row light blue" style={{ margin: 0, textAlign: "center" }}>
    <div className="col s12 m12 flex">
      <h6 className="text-shadow">
        <Link to="/" className="white-text">
          <strong className="red-text">M</strong>edia{" "}
          <strong className="red-text">S</strong>hore
        </Link>
      </h6>
      <Link to="/login" className="white-text">
        Login/Signup
      </Link>
    </div>
  </div>
);
