import React from "react";
import { Link } from "react-router-dom";
import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

/**2 */
const IT = () => {
  return (
    <div className="bodyy coursee" id="it">
      <h4 className="heading">Information Technology</h4>
      <div className="displayblock">
        <div className="it">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="it"
          />
        </div>
        <p className="lines">
          The department is newly established during the academic year 2017-18
          with an intake of 60 especially to cater the needs of IT and ITES
          industry. Since the department is young but rich with good
          infrastructure required for imparting high quality education and the
          department is fully structured to meet the contemporary needs of the
          industry. Imparting high quality education is supported by well
          qualified and experienced faculty members. The curriculum of the
          B.Tech(IT) 4-year programme is as per the Jawaharlal Nehru
          Technological University Hyderabad.
          <br />{""} <br />
          The department has 12 computer laboratories equipped with advanced
          computer systems and software meeting to the curriculum requirements
          along with separate Basic Electronics and Microprocessor Lab. The
          software in the labs include WEKA Data Mining Tool, KEIL Embedded
          System Software, MATLAB, C/C++/Java IDE, Operating Systems (Linux,
          Zorin), Net Beans IDE, Web Sphere, Tom Cat, Web Logic etc.
          <br />{""} <br />
          Facilities like fiber optic with Internet access speed of 80 Mbps,
          Digital library with access to online IEEE journals, online database
          viz., MCGRAW HILL, SCIENCE DIRECT, SPRINGERLINK, printed magazines
          (Digit, Chip) and journals, NPTEL videos etc are all available.
          <br />{""} <br />
          <Link to="/Courses/CS-IT">
            Computer Science and Information Technology
          </Link>
        </p>
      </div>
    </div>
  );
};

export default IT;
