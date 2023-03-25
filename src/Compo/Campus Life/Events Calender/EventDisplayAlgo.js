import React from "react";
import "./events.css";

export const EventDisplayAlgo = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
          <div className="EventsBox">
            <div id="datebox">
              <p id="date">{item.date}</p>
              <p id="month">{item.month}</p>
            </div>
            <div id="EventName">
              <p>{item.name}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
