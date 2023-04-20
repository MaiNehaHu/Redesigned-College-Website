import React from "react";
import "./Style.css";
import CourseData from "./CourseData";
import CourseDisplayAlgo from "./CourseDisplayAlgo";

export const Courses = () => {
  return (
    <React.Fragment>
      <div className="Component">
        <h1 id="headingOfCompo">Our Courses</h1>
        <div className="scrollerBox snaps-inline">
          <div >
            <CourseDisplayAlgo data={CourseData} index={0} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={1} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={2} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={3} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={4} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={5} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={6} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={7} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={8} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={9} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={10} />
          </div>
          <div >
            <CourseDisplayAlgo data={CourseData} index={11} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
