import React from "react";
import "./pack.css";

import Detail from "./PackagesData";
import DisplayPackages from "./DisplayAlgori";

const PackagesOffered = () => {
  return (
    <>
      <div id="PackagesOfferedByCompanies">
        <p id="head">Packages Offered</p>

        <div className="scrollers snaps-inline">
          <div className="elements">
            <DisplayPackages data={Detail} index={0} />
          </div>
          <div className="elements">
            <DisplayPackages data={Detail} index={1} />
          </div>
          <div className="elements">
            <DisplayPackages data={Detail} index={2} />
          </div>
          <div className="elements">
            <DisplayPackages data={Detail} index={3} />
          </div>
          <div className="elements">
            <DisplayPackages data={Detail} index={4} />
          </div>
          <div className="elements">
            <DisplayPackages data={Detail} index={5} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PackagesOffered;
