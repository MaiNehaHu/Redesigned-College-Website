import React from "react";
import "../StyleForAllNavPages.css";
import "./AdmissionsStyle.css";

const Admission = () => {
  return (
    <div className="bodyy" id="Admission">
      <h4 className="heading">Admissions</h4>
      <div className="displayblock">
        <img
          src="https://eduquest.org.in/wp-content/uploads/2021/01/college-admissions-2.jpg"
          alt=""
        />
        <h6 className="heads">Eligibility for admission</h6>
        <p className="lines">
          As per the Govt. Notification. Normally, EAMCET candidates having
          passed 10+2 Examination with minimum 60% marks. E-CET qualified for
          lateral entry and I-CET for PG Courses.
        </p>
        <h6 className="heads">Seats allocation:</h6>
        <p className="lines">
          As per the prevailing Government Policy:- 70% of the seats are
          allotted from Government - Convenor Quota, and the remaining 30% from
          Management Quota - EAMCET/AIEEE Qualified or as notified by the
          Government likely 10+2 pass.
        </p>
        <h6 className="heads">Paper Notification</h6>
        <p className="lines">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Category-B Seats Notification
          </a>{" "}
          <br />
          <a href="/" target="_blank" rel="noopener noreferrer">
            E-CET Spot Admission Notification
          </a>{" "}
          <br />
          <a href="/" target="_blank" rel="noopener noreferrer">
            MBA-B Category Admission Notification{" "}
          </a>{" "}
          <br />
          <a href="/" target="_blank" rel="noopener noreferrer">
            Revised fee-circular
          </a>
        </p>
        <h6 className="heads">Fee Structure</h6>
        <p className="lines">
          <div id="FEEtable" className="Navtable">
            <table>
              <thead>
                <th>S.no.</th>
                <th>Course</th>
                <th>Convenor Quota</th>
                <th>NRI/Management Quota</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>B.tech</td>
                  <td>80,000 per annum</td>
                  <td>(NA)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>M.tech</td>
                  <td>60,000 per annum</td>
                  <td>(NA)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MBA</td>
                  <td>30,000 per annum</td>
                  <td>(NA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </p>
        <h6 className="heads">How To Apply</h6>
        <p className="lines">
          Use this link to{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            download
          </a>{" "}
          the application form. Please submit the fully filled application form
          with the required documents in college.
        </p>
        <h6 className="heads">For details contact</h6>
        <p className="lines">
          Phone : 040 - 29556182, 9949774842, 7893147440, 9866755144.
          <br />
          E-mail:{" "}
          <a href="mailto:admissions@mlritm.ac.in">admissions@mlritm.ac.in</a>
        </p>
      </div>
    </div>
  );
};

export default Admission;
