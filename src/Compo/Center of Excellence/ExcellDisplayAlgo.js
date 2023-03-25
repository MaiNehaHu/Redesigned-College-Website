import React from "react";
import { Link } from "react-router-dom";
import "./Excell.css";

export const ExcellDisplayAlgo = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <div id="ExcellenceBox">
          <div className="Pic">
            <img src={item.label} alt={item.error} />
          </div>
          <Link to={item.Linkto}>
            <div className="Conttent">
              <h3>{item.Head}</h3>
              <p>{item.subHead}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
