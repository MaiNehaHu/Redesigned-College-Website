import React, { useState } from "react";
import DisplayResult from "./DisplayResult";
import Result from "./ResultData";
import "../Research/ResearchStyle.css"; /**Buttonn design */
import "./ExamStyle.css";
const Results = () => {
  const [branch, setBranch] = useState("CSE");
  return (
    <>
      <div className="bodyy" id="results">
        <h4 className="heading">Results</h4>
        <div className="displayblock">
          <div className="branches">
            <button onClick={() => setBranch("CSE")} className="Buttonn">
              CSE
            </button>
            <button onClick={() => setBranch("ECE")} className="Buttonn">
              ECE
            </button>
            <button onClick={() => setBranch("EEE")} className="Buttonn">
              EEE
            </button>
            <button onClick={() => setBranch("IT")} className="Buttonn">
              IT
            </button>
            <button onClick={() => setBranch("CIVIL")} className="Buttonn">
              CIVIL
            </button>
            <button onClick={() => setBranch("MECH")} className="Buttonn">
              MECH
            </button>
            <button onClick={() => setBranch("MBA")} className="Buttonn">
              MBA
            </button>
            <button onClick={() => setBranch("M.TECH")} className="Buttonn">
              M.TECH
            </button>
          </div>
          <div id="branches">
            {branch === "CSE" && <DisplayResult data={Result} index={0} />}
            {branch === "ECE" && <DisplayResult data={Result} index={1} />}
            {branch === "EEE" && <DisplayResult data={Result} index={2} />}
            {branch === "IT" && <DisplayResult data={Result} index={3} />}
            {branch === "CIVIL" && <DisplayResult data={Result} index={4} />}
            {branch === "MECH" && <DisplayResult data={Result} index={5} />}
            {branch === "MBA" && <DisplayResult data={Result} index={6} />}
            {branch === "M.TECH" && <DisplayResult data={Result} index={7} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Results;
