import React from "react";
import "./events.css";
import "../Height.css";
import EventData from "./EventData";
import { EventDisplayAlgo } from "./EventDisplayAlgo";

export const Events = () => {
  return (
    <>
      <div className="Height EventCompHeigh">
        <p id="TopHeading">Events Calender</p>
        <div className="eventBtn">
          <EventDisplayAlgo data={EventData} index={0} />
        </div>
        <div className="eventBtn">
          <EventDisplayAlgo data={EventData} index={1} />
        </div>
        <div className="eventBtn">
          <EventDisplayAlgo data={EventData} index={2} />
        </div>
        <div className="eventBtn">
          <EventDisplayAlgo data={EventData} index={3} />
        </div>
        <div className="eventBtn">
          <EventDisplayAlgo data={EventData} index={4} />
        </div>
      </div>
    </>
  );
};
