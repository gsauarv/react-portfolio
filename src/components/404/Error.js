import React from "react";
import img_404 from "../images/404.svg";
import { Link } from "react-router-dom";
import homeImg from "../images/home.svg";
const Error = () => {
  return (
    <div>
      <div className="errorContainer">
        <img src={img_404} alt="page not found" className="errorImg" />
        <h3 className="errorMessage">Oops! Page Not Found</h3>

        <Link to="/">
          <img src={homeImg} alt="homePage" className="homeImg" />
        </Link>

        <p>Go Back</p>
      </div>
    </div>
  );
};

export default Error;
