import React from "react";
import "./StdCards.css";

import Data from "./StuReviewData";
import DisplayReview from "./DisplayAlgo";

const StudentCards = () => {
  return (
    <>
    <p id="heading">TESTIMONIALS</p>
      <div className="scroller snaps-inline">
        <div className="element">
          <DisplayReview data={Data} index={0} />
        </div>
        <div className="element">
          <DisplayReview data={Data} index={1} />
        </div>

        <div className="element">
          <DisplayReview data={Data} index={2} />
        </div>
        <div className="element">
          <DisplayReview data={Data} index={3} />
        </div>

        <div className="element">
          <DisplayReview data={Data} index={4} />
        </div>
        <div className="element">
          <DisplayReview data={Data} index={5} />
        </div>

        <div className="element">
          <DisplayReview data={Data} index={6} />
        </div>
        <div className="element">
          <DisplayReview data={Data} index={7} />
        </div>

        <div className="element">
          <DisplayReview data={Data} index={8} />
        </div>
        <div className="element">
          <DisplayReview data={Data} index={9} />
        </div>
      </div>
    </>
  );
};

export default StudentCards;
