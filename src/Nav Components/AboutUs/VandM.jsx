import React from "react";
import "../StyleForAllNavPages.css";
import "./AboutUsStyle.css"

export const VisionandMission = () => {
  return (
    <>
      <div className="bodyy">
        <h4 className="heading">Vission and Mission</h4>
        <div className="displayblock">
          <h6 className="heads">Our Vision</h6>
          <p className="lines">
            To be as an ideal academic institution by graduating talented
            engineers to be ethically strong, competent with quality research
            and technologies.
          </p>
          <h6 className="heads">Our Mission</h6>
          <p className="lines">
            Utilize rigorous educational experiences to produce talented
            engineers.
            <br />
            Create an atmosphere that facilitates the success of students.
            <br />
            Programs that integrate global awareness, communication skills and
            Leadership qualities.
            <br />
            Education and Research partnership with institutions and industries
            to prepare the students for interdisciplinary research.
          </p>
          <h6 className="heads">Quality Policy</h6>
          <p className="lines">
            Aspire to establish a system, which would improve the quality of
            education, teaching - learning and training process on continuous
            basis and ultimately develop the institute as a center of
            excellence.
          </p>
          <hr />
          <div id="pics">
            <img
              src="https://mlritm.ac.in/assets/img/m1.jpg"
              alt="project"
            />
            <img src="https://mlritm.ac.in/assets/img/m2.jpg" alt="lab" />
          </div>
          <p className="lines">
            Create an atmosphere that facilitates the success of students.
          </p>
        </div>
      </div>
    </>
  );
};

