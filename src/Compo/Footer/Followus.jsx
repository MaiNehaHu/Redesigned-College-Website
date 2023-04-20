import React from "react";
import { Link } from "react-router-dom";
import "./Followus.css";

export const Followus = () => {
  return (
    <>
      <div className="Follow">
        <div>
          <p id="message">Follow Us</p>
        </div>
        <div className="flex-down">
          <div id="insta">
            <Link to="/">
              <i className="fa fa-instagram"></i>
            </Link>
          </div>
          <div id="yt">
            <Link to="/">
              <i class="fa fa-youtube"></i>
            </Link>
          </div>
          <div id="twitter">
            <Link to="/">
              <i className="fa fa-twitter"></i>
            </Link>
          </div>
          <div id="fb">
            <Link to="/">
              <i className="fa fa-facebook-square fb"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
