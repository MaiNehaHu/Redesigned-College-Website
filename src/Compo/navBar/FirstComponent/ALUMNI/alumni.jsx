import React, { useState } from "react";
import "./alumni.css";

import { AlumniDisplayAlgo } from "./AlumniDisplayAlgo";
import Info from "./AlumniData";

export const Alumni = () => {
  const [active, setActive] = useState("null");

  return (
    <>
      <div id="Alumni">
        <button onClick={() => setActive("ass")} className="alumniBtn">
          ALUMNI ASSOCIATION
        </button>
        <button onClick={() => setActive("comm")} className="alumniBtn">
          ALUMNI COMMITTEE
        </button>
        <button onClick={() => setActive("resp")} className="alumniBtn">
          ALUMNI RESPONSIBILITIES
        </button>
        <button onClick={() => setActive("meets")} className="alumniBtn">
          ALUMNI MEETS AND ACTIVITIES
        </button>
        <button onClick={() => setActive("func")} className="alumniBtn">
          ALUMNI FUNCTIONS
        </button>

        <button onClick={() => setActive("mem")} className="alumniBtn">
          ALUMNI MEMBERS
        </button>
        <button onClick={() => setActive("null")} className="alumniBtn close">
          Close
        </button>
      </div>
      <div className="card">
        {active === "ass" && <AlumniDisplayAlgo data={Info} index={0} />}
        {active === "comm" && <AlumniDisplayAlgo data={Info} index={1} />}
        {active === "resp" && <AlumniDisplayAlgo data={Info} index={2} />}
        {active === "func" && <AlumniDisplayAlgo data={Info} index={3} />}
        {active === "meets" && <AlumniDisplayAlgo data={Info} index={4} />}
        {active === "mem" && <AlumniDisplayAlgo data={Info} index={5} />}
      </div>
    </>
  );
};
