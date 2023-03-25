import React, { useState } from "react";
import DisplayPublications from "./DisplayPublications";
const Publications = () => {
  const [active, setActive] = useState("2022");

  return (
    <div className="bodyy" id="publications">
      <h4 className="heading">Publications</h4>
      <div className="displayblock">
       
          <div id="publication">
            <button onClick={() => setActive("2022")} className="Buttonn">
              2022
            </button>
            <button onClick={() => setActive("2021")} className="Buttonn">
              2021
            </button>
            <button onClick={() => setActive("2020")} className="Buttonn">
              2020
            </button>
          </div>
          <div className="btnss">
            {active === "2022" && <DisplayPublications index={0} />}
            {active === "2021" && <DisplayPublications index={1} />}
            {active === "2020" && <DisplayPublications index={2} />}
          </div>
        
      </div>
    </div>
  );
};

export default Publications;
