import React from "react";
import "../StyleForAllNavPages.css";
import "./AdmissionsStyle.css";

const AdmissionProcedure = () => {
  return (
    <>
      <div id="AdmissionProc" className="bodyy">
        <h4 className="heading">Admission Procedure</h4>
        <p className="lines">
          <img
            src="https://dbmscollege.in/wp-content/uploads/2021/09/f041765f6c665ac00193ce3fe122367bb5b445e1.jpeg"
            alt="admission"
          />
          The regulations/guidelines specified herein are applicable for
          admission of candidates to various UG and PG programs offered by
          MLRITM,Dundigal, Hyderabad. These are subject to change according the
          orders of the UGC, the AICTE, the State Government, the Telangana
          State Council of Higher Education, Commissioner of Technical
          Education, JNTUH University and the Conveners of various UG and PG
          Common Entrance Tests etc. from time to time.
          <br /> <br />
          The admission to the B.Tech. course, under “Category A” seats, is
          through a state level entrance test called “Engineering, Agricultural
          Sciences and Medical Common Entrance Test” (EAMCET), conducted by
          Telangana State Council of Higher Education. AThe Admission in to
          M.TECH Course through the state level entrance test called
          "PGECET(Post Graduate Engineering Common Entrance Test)" and Graduate
          Aptitude Test in Engineering (GATE). The Admission into the MBA
          Course, Under Category “A” through the state level entrance test
          called “TS ICET (Telangana State Integrated Common Entrance Test).
          <br />
        </p>
        <hr />
        <h6 className="heads">A- Category (Convener Quota)</h6>
        <p className="lines">
          70% of the students are admitted under “Category A” by the Convener of
          EAMCET based on the rank secured in EAMCET and as per the rules of
          reservation in force.
        </p>
        <hr />
        <h6 className="heads">B- Category (Management Quota)</h6>
        <p className="lines">
          30% of the students are admitted under “Category B” by the college
          management based on the guidelines issued by the government of
          Telangana.
        </p>
        <hr />
        <h6 className="heads">
          Admission to the second year of 4-year B.Tech Degree (Lateral Entry)
          Programme in Engineering:
        </h6>
        <p className="lines">
          Seats up to 10% of the sanctioned intake of each programme of
          undergraduate course shall be filled by the Convenor, TSECET as
          lateral entry admission into second year of B. Tech programme based on
          the merit ranks obtained by the students in TSECET (State Level Common
          Entrance Test)
        </p>
        <hr />
        <h6 className="heads">
          Spot Admission Procedure for B.Tech 4-year Course:
        </h6>
        <p className="lines">
          Any seats left vacant in the convener quota, will be filled by the
          institution based on the guidelines given by Convener TSEAMCET.
        </p>
        <hr />
        <h6 className="heads">Procedure:</h6>
        <p className="lines">
          The College issues an advertisement after necessary approval. The spot
          admissions will be made according to the guidelines issued from time
          to time by Convener TSEAMCET.
        </p>
        <h6 className="heads">
          Spot Admission Procedure for B.Tech Lateral Entry: –{" "}
        </h6>
        <p className="lines">
          Admission will be made based on the guidelines issued by the Convener
          TSECET.
        </p>
        <hr />
        <h6 className="heads">Procedure:</h6>
        <p className="lines">
          The College issues an advertisement after necessary approval. The spot
          admissions will be made according to the guidelines issued from time
          to time by the Convener TSECET.
          <br /> <br />
          All admissions made at institute level (Spot Admissions) are subject
          to approval of competent authorities.
        </p>
        <hr />
        <h6 className="heads">Telangana MBA Admission Eligibility Criteria</h6>
        <p className="lines">
          Candidates have to fulfill certain eligibility criteria given below
          laid down by the admission authority before filling the Telangana MBA
          <br /> <br />
          Application Form:
          <br />
          The candidate must be a graduate in any discipline recognized by the
          UGC/the Association of Indian Universities/AICTE from a recognized
          university with an aggregate of 50%Candidates must score the minimum
          required marks in the CAT/MAT/SNAP/TS ICET Only students from the
          state of Telangana can attempt the TSICET exams.
        </p>
        <hr />
        <div id="Admitable" className="Navtable">
          <table>
            <thead>
              <th>TS ICET PATTERN</th>
              <th>Details</th>
            </thead>
            <tbody>
              <tr>
                <td>Mode of examination</td>
                <td>Computer-based (CBT)</td>
              </tr>
              <tr>
                <td>Number of sections</td>
                <td>
                  Three sections, namely:
                  <br />
                  - Analytical Ability
                  <br />
                  - Mathematical Ability
                  <br />- Communication Ability
                </td>
              </tr>
              <tr>
                <td>Number of questions</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Question type</td>
                <td>Objective Type | Multiple Choice Questions(MCQ)</td>
              </tr>
              <tr>
                <td>Maximum marks</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Duration of the test</td>
                <td>150 minutes | 2.5 hours</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>English, Telugu, Urdu</td>
              </tr>
              <tr>
                <td>Marks per question</td>
                <td>One mark for the correct answer</td>
              </tr>
              <tr>
                <td>Negative marking</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Qualifying marks</td>
                <td>25 % for unreserved category</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdmissionProcedure;
