import React from "react";
import { Link } from "react-router-dom";
import "./Fac.css";

export const FacDisplayAlgo = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
          <div id="FacilityBox" key={index}>
            <Link to={item.Link}>
              <div className="BOXX">
                <div className="FacilityPhoto">
                  <img src={item.images} alt={item.alternative} />
                </div>
                <div className="Description">
                  <p>{item.Text}</p>
                </div>
              </div>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};
