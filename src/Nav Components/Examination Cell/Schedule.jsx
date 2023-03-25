import React, { useState } from "react";
import DisplaySchedule from "./DisplaySchedule";

const Schedule = () => {
  
  const [active, setActive] = useState("B.tech");

  return (
    <div className="bodyy" id="schedule">
      <h4 className="heading">Schedule of Examinations</h4>
      <div className="displayblock">
        <div id="notification">
          <button onClick={() => setActive("B.tech")} className="Buttonn">
            B.tech
          </button>
          <button onClick={() => setActive("M.tech")} className="Buttonn">
            M.tech
          </button>
          <button onClick={() => setActive("MBA")} className="Buttonn">
            MBA
          </button>
        </div>
        <div>
          {active === "B.tech" && <DisplaySchedule index={0} />}
          {active === "M.tech" && <DisplaySchedule index={1} />}
          {active === "MBA" && <DisplaySchedule index={2} />}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
