import React from "react";
import { Link } from "react-router-dom";
import "./awards.css";
import "../Height.css";


export const Awards = () => {
  return (
    <>
      <div className="Height">
        <p id="Head">Awards / Recognitions</p>
        <div className="Avards">
          <div id="prize">
          <img
            src="https://royalholloway.ac.uk/media/18162/award-sw.jpg"
            alt="award"
          />
          </div>
          <div id="Described">
          <p>
            The College has been Accredited by National Board of Accreditation
            (NBA), National Assessment and Accreditation Council (NAAC) with 'A'
            Grade and recognized by Scientific and Industrial Research
            Organization(SIRO).
          </p>
          <Link id="readmore" to="/CampusLife/Awards&Recognitions">Read more....</Link>
          </div>
        </div>
      </div>
    </>
  );
};
