import React from "react";

import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

// 2
const ECE = () => {
  return (
    <div className="bodyy coursee" id="ece">
      <h4 className="heading">Electronics and Communication Engineering </h4>
      <div className="displayblock">
        <div className="ece">
          <img
            src="https://www.gniotgroup.edu.in/blog/wp-content/uploads/2019/07/8861.jpg"
            alt="ece"
          />
        </div>
        <p className="lines">
          The Electronics and Communication Engineering is one of the core
          engineering majors and it represents a rapidly developing field,
          including wireless communications, micro- and nano-electronics. The
          Department of Electronics and Communication Engineering was
          established in the year 2009 with the intake of 60 students and
          rapidly growing. The intake number has been increased to 216 by 2012.
          In 2012, the department started M.Tech program with specialization in
          embedded systems with an intake of 24. The department has got various
          international and national certifications which enhances the rank of
          the department. The department has got accreditation from NAAC with
          ‘A’ grade in 2015 and NBA in 2016.
          <br />
          {" "}
          <br/>
          The department has produced more than 600 graduates till now. The main
          objective of this course is to provide students with very strong
          insight of electronics and communication areas as well as related
          aspects. The department has very well trained faculties with 06
          Professors, 14 Associate Professors and 30 Assistant Professors. The
          faculties are qualified and proficient with a wide range of experience
          in academics and industry. The faculty members of our department have
          published a large number of research papers in referred journals like
          IEEE, Elsevier etc.
          <br />
          {" "}
          <br/>
          It is one of the most significant branches of engineering which has
          always been in demand. The department is known for its efficacy and
          holds a strong reputation. Various workshops, guest lectures and FDP
          programs were organized by the department time to time for enhancing
          the knowledge and quality of students as well as the faculties. The
          department aims primarily at excellence not only in theoretical but
          also in experimental research in Embedded Systems, Signal Processing,
          VLSI Design, Communications, RF & Microwave, Antennas, etc.
        </p>
      </div>
    </div>
  );
};

export default ECE;
