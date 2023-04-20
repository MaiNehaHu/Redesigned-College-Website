import React from "react";
import "./Fac.css";

import FacData from "./FacData";
import { FacDisplayAlgo } from "./FacDisplayAlgo";

export const Facilities = () => {
  return (
    <div id="Facilities">
      <h1 id="headingOfCompo">Facilities</h1>
      <div className="scrollerBoxx snaps-inline">
        <div>
          <FacDisplayAlgo data={FacData} index={0} />
        </div>
        <div>
          <FacDisplayAlgo data={FacData} index={1} />
        </div>
        <div>
          <FacDisplayAlgo data={FacData} index={2} />
        </div>
        <div>
          <FacDisplayAlgo data={FacData} index={3} />
        </div>
        <div>
          <FacDisplayAlgo data={FacData} index={4} />
        </div>
        <div>
          <FacDisplayAlgo data={FacData} index={5} />
        </div>
        <div>
          <FacDisplayAlgo data={FacData} index={6} />
        </div>
      </div>
    </div>
  );
};
