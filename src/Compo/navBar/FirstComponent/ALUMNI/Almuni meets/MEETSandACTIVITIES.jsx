import React, { useState } from "react";
import "./Styling.css";

import { MeetsandActivitiesDisplay } from "./MandAdisplay";

export const MEETSandACTIVITIES = () => {
  const [active, setActive] = useState("null");

  return (
    <>
      <div className="meetsandAct">
        <button onClick={() => setActive("meet1")} className="MandAbtn">
          1st MEET
        </button>
        <button onClick={() => setActive("meet2")} className="MandAbtn">
          2nd MEET
        </button>
        <button onClick={() => setActive("meet3")} className="MandAbtn">
          3rd MEET
        </button>
        <button onClick={() => setActive("null")} className="MandAbtn">
          Close
        </button>
      </div>
      <div className="card">
        {active === "meet1" && <MeetsandActivitiesDisplay index={0} />}
        {active === "meet2" && <MeetsandActivitiesDisplay index={1} />}
        {active === "meet3" && <MeetsandActivitiesDisplay index={2} />}
      </div>
    </>
  );
};
