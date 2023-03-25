import React from "react";
import "../StyleForAllNavPages.css";

const Howtoapply = () => {
  return (
    <div id="howToApply" className="bodyy">
      <h4 className="heading">How To Apply</h4>
      <div id="arrange">
        <div id="left">
          <p className="lines">
            Use this link to{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              download
            </a>{" "}
            the application form.
            <br />
            Please submit the fully filled application form with the required
            documents in college.
          </p>

          <h6 className="heads">For details contact</h6>
          <p className="lines">
            Phone : 040 - 29556182, 9949774842, 7893147440, 9866755144.
            <br />
            E-mail:{" "}
            <a href="mailto:admissions@mlritm.ac.in">admissions@mlritm.ac.in</a>
          </p>
        </div>
        <div id="right">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2022/10/Application-forms-released-4-og-14.jpg"
            alt="how to apply"
          />
        </div>
      </div>
    </div>
  );
};

export default Howtoapply;
