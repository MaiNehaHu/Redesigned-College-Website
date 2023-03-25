import React from "react";
import './Style.css'
import { Link } from "react-router-dom";

const CourseDisplayAlgo = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
          <div className="Courses">
            <Link to={item.Linkto}>
            <div className="ele">
              <img src={item.imagesrc} alt={item.alter} />
              <p id="courseName">{item.name}</p>
            </div>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};

export default CourseDisplayAlgo;
