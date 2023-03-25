import React, { useState } from "react";

import Display from './OnClickDisplayAlgo';
import Data from "./OnClickDisplayData";
import "./firstStyle.css";

const FirstComponent = () => {
  const [active, setActive] = useState("null");

  return (
    <>
      <div id="containerofnav">

        <div className="navbar">
          <nav>
            <button onClick={() => setActive("ARIIA")} className="navbutton">
              <icon>
                <img src="https://img.icons8.com/color/22/000000/instagram-verification-badge.png" />
              </icon>
              <span>ARIIA</span>
            </button>
            <button onClick={() => setActive("AICTE")}className="navbutton">
              <icon>
                <img src="https://img.icons8.com/color/22/000000/instagram-verification-badge.png" />
              </icon>
              <span>AISHE</span>
            </button>
            <button onClick={() => setActive("IQAC")} className="navbutton">
              <icon>
                <img src="https://img.icons8.com/color/22/000000/instagram-verification-badge.png" />
              </icon>
              <span>IQAC</span>
            </button>
            <button onClick={() => setActive("NIRF")}className="navbutton">
              <icon>
                <img src="https://img.icons8.com/color/22/000000/instagram-verification-badge.png" />
              </icon>
              <span>NIRF</span>
            </button>
            <button onClick={() => setActive("NAAC")} className="navbutton">
              <icon>🎖️</icon>
              <span>NAAC</span>
            </button>
            <button onClick={() => setActive("NBA")} className="navbutton">
              <icon>🎖️</icon>
              <span>NBA</span>
            </button>
            <button onClick={() => setActive("UGC")} className="navbutton">
              <icon>🎖️</icon>
              <span>UGC</span>
            </button>
            <button onClick={() => setActive("ALUMNI")} className="navbutton">
              <icon id="alumni">
                <img src="https://img.icons8.com/plasticine/20/000000/graduation-cap.png" />
              </icon>
              <span>ALUMNI</span>
            </button>
            <button onClick={() => setActive("LOGIN")} className="navbutton">
              <icon>
                <img src="https://img.icons8.com/external-bearicons-blue-bearicons/20/000000/external-login-call-to-action-bearicons-blue-bearicons-1.png" />
              </icon>
              <span>LOGIN</span>
            </button>
            <button onClick={() => setActive("null")} className="navbutton">Close</button>
          </nav>
          <div className="card">
            {active === "ARIIA" && <Display data={Data} index={0} />}
            {active === "AICTE" && <Display data={Data} index={1} />}
            {active === "IQAC" && <Display data={Data} index={2} />}
            {active === "NIRF" && <Display data={Data} index={3} />}
            {active === "NAAC" && <Display data={Data} index={4} />}
            {active === "NBA" && <Display data={Data} index={5} />}
            {active === "UGC" && <Display data={Data} index={6} />}
            {active === "ALUMNI" && <Display data={Data} index={7} />}
            {active === "LOGIN" && <Display data={Data} index={8} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstComponent;
