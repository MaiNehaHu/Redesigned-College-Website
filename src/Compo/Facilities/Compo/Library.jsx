import React from "react";

import "./mediagallery.css";
import "../../../Nav Components/StyleForAllNavPages.css";
import "../../../Nav Components/Admissions/AdmissionsStyle.css";

const Library = () => {
  return (
    <div className="bodyy" id="lib">
      <h4 className="heading">Library</h4>
      <div className="displayblock">
        <h6 className="heads">
          "LIBRARY IS A HEART OF THE INSTITUTION" By Sarvepalli Radhakrishnan
        </h6>
        <p className="lines">
          The Library and Information Centre is located in a spacious, well
          ventilated and illuminated Hall of 1,116 square meters, volumes
          including the books in Reference Section 22313. About149 periodicals,
          journals and 11 prominent daily newspapers (English & Telugu) are made
          available in the Library. The total seating capacity of library and
          information centre is 400.
          <br />
          {' '}
          <br/>
          The Library and Information Centre is completely automated and
          computerized (EzLibrary). All the staff and students have free access
          to internet in the library. Our college is one of the few institutions
          in the state to have DELNET (Developing Library Network) facilities
          providing access to internet library loan system nearly 700 libraries
          in the country and SAARC Countries. Adequate Reprographic facilities
          are available in the Library and Information Centre.
        </p>
        <br/>
        {" "}
        <br/>
        <p className="lines">
            Contact
            <br/>
            <a href="mailto:library@mlritm.ac.in">library@mlritm.ac.in</a>
        </p>
        <div>
          <img src="https://www.mlritm.ac.in/assets/img/24.jpg" alt="lib" />
          <img src="https://www.mlritm.ac.in/assets/img/32.jpg" alt="lib" />
        </div>
      </div>
    </div>
  );
};

export default Library;
