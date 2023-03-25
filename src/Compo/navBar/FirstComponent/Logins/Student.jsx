import React from "react";
import './Design.css'
import "../../../../Nav Components/StyleForAllNavPages.css";


const StudentLogin = () => {
  return (
    <>
      <div className="bodyy log" >
        <h4 className="heading">Login</h4>
        <div className="Contentblock">
          <p className="lines">Click on the button below to login</p>
          <button>Student Login</button>
          <button>Student ERP Login</button>
          <button>LMS Student Login</button>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
