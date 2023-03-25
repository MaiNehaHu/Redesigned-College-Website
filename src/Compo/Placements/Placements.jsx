import React from "react";
import Company from "./companies/company";
import Count from "./counter";
import PackagesOffered from "./Packages/packages";

import "./Placements.css";
import StudentCards from "./Testimonials/StudentCards";

const Placements = () => {
  return (
    <>
      <div id="Pconatiner">
        <h1 id="headingOfCompo">
          Campus Placements <Count />+
        </h1>
        <div id="Twoboxes">
          <div className="box">
            <Company />
          </div>
          <div className="box1">
            <div className="box11">
              <StudentCards />
            </div>
            <div className="box12">
              <PackagesOffered />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placements;
