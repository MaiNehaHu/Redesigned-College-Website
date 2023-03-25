import React, { useState } from "react";
import Info from "./NIRFrankData";
import Display from "./NIRFdisplay";
import "./NIRFstyle.css";

const NIRFrank = () => {
  const [active, setActive] = useState("2022");

  return (
    <>
      <div id="nirf">
        <button onClick={() => setActive("2022")} className="nirf">
          2022
        </button>
        <button onClick={() => setActive("2021")} className="nirf">
          2021
        </button>
        <button onClick={() => setActive("2020")} className="nirf">
          2020
        </button>
        <button onClick={() => setActive("null")} className="nirf">
          Close
        </button>
      </div>
      <div className="card">
        {active === "2022" && <Display data={Info} index={0} />}
        {active === "2021" && <Display data={Info} index={1} />}
        {active === "2020" && <Display data={Info} index={2} />}
      </div>
    </>
  );
};

export default NIRFrank;
