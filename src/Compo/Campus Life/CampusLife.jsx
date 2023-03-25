import React from "react";
import "./CampusLife.css";
import { Awards } from "./Awards/awards";
import { Events } from "./Events Calender/events";


export const CampusLife = () => {
  return (
    <>
      <div id="CampusLife">
        <h1 id="headingOfCompo">Campus Life</h1>
        <div className="Flexer">
          
          <Awards />

          <Events />
        </div>
      </div>
    </>
  );
};
