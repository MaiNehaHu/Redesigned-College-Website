import React ,{useState}from "react";
import './nbaTable.css';

import { TableDisplay } from "./TableDisplay";
import Info from './TableData';

export const NBATable = () => {
  const [active, setActive] = useState("cse");

  return (
    <>
      <div id="NBA">
        <button onClick={() => setActive("cse")} className="nbaBtn">
          CSE
        </button>
        <button onClick={() => setActive("ece")} className="nbaBtn">
          ECE
        </button>
        <button onClick={() => setActive("mech")} className="nbaBtn">
          MECH
        </button>
        <button onClick={() => setActive("civil")} className="nbaBtn">
          CIVIL
        </button>
        <button onClick={() => setActive("null")} className="nbaBtn">
          Close
        </button>
      </div>
      <div className="card">
        {active === "cse" && <TableDisplay data={Info} index={0} />}
        {active === "ece" && <TableDisplay data={Info} index={1} />}
        {active === "mech" && <TableDisplay data={Info} index={2} />}
        {active === "civil" && <TableDisplay data={Info} index={3} />}
      </div>
    </>
  );
};
