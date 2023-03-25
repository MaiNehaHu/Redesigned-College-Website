import React from "react";
import { Link } from "react-router-dom";
import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

/**1 */
const CSE = () => {
  return (
    <>
      <div className="bodyy coursee" id="cse">
        <h4 className="heading">Computer Science</h4>
        <div className="displayblock">
          <div id="cse">
            <img
              src="https://cdn.dal.ca/faculty/computerscience/cs-education/_jcr_content/contentPar/featureslider/featureSlider/featureslide/image.adaptive.910.high.jpg/1602699267504.jpg"
              alt="cse"
            />
          </div>
          <p className="lines">
            The department of Computer Science and engineering was established
            in the year 2010. Since then, the department has produced more than
            500 graduates and 100 postgraduates. The department has a very
            strong faculty with 6 Professors, 9 Associates Professors and 32
            Assistant Professors. The department of CSE offers an Undergraduate
            Program in CSE with an intake of 180 students and two P.G. Programs
            with an intake of 24 students in CSE. The department is actively
            engaged in Research in the areas of Cryptography and Network
            Security, Data Mining, Wireless Networks , internet of things [IOT]
            etc.
            <br /> <br />
            The department has highly qualified, dedicated and efficient
            teaching faculties and committed administrative staff in all
            disciplines. Laboratories such as Java Programming, Data Structures,
            DBMS, OS, Linux, Data warehousing & Data Mining, Case Tools and Web
            Technologies Labs are well equipped and designed in such a way so as
            to provide an industrial environment
            <br /> <br />
            The Department has got projects under various schemes such as DST,
            RPS etc. Various conferences and workshops were organized related to
            our field of study under the sponsorship of AICTE, CSI and other
            reputed organizations. The department coordinates and provides
            guidance to the students to pursue their studies. The faculty
            members of our department have published a number of research papers
            in referred journals like springer, IEEE, Elesvier etc.
            <br />
            {""}
            <br />
            <Link to="/Courses/CSE"> Computer Science and Engineering</Link>
            <br />
            <Link to="/Courses/AI&ML">
              {" "}
              Computer Science and Engineering (AI & ML)
            </Link>
            <br />
            <Link to="/Courses/DS">
              {" "}
              Computer Science and Engineering (Data Science)
            </Link>
            <br />
            <Link to="/Courses/CS">
              {" "}
              Computer Science and Engineering (Cyber Security)
            </Link>
            <br />
            <Link to="/Courses/CS-IT">
              {" "}
              Computer Science and Information Technology
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CSE;
