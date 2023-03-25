import React from "react";

const DisplayReview = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
        
        <div id="StudentsCard">
          <img src={item.image} alt={item.alt} className="Stdimg" />
          <div className="contentS">
            <p className="align">{item.lines}</p>
          </div>
        </div>
        </>
      ))}
    </>
  );
};

export default DisplayReview;

