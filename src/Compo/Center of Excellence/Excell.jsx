import React from "react";
import "./Excell.css";

import Detail from "./ExcellenceData";
import { ExcellDisplayAlgo } from "./ExcellDisplayAlgo";

export const CenterOfExcel = () => {
  return (
    <>
      <div className="ContentBox">
        <h1 id="headingOfCompo">Center Of Excellence</h1>
        <div className="Flexboxes">
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={0} />
          </div>
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={1} />
          </div>
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={2} />
          </div>
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={3} />
          </div>
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={4} />
          </div>

          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={5} />
          </div>
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={6} />
          </div>
          <div className="FlexBox">
            <ExcellDisplayAlgo data={Detail} index={7} />
          </div>
        </div>
      </div>
    </>
  );
};
