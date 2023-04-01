import React from "react";

import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

const CS = () => {
  return (
    <div className="bodyy coursee" id="cyber">
      <h4 className="heading">Cyber Security</h4>
      <div className="displayblock">
        <div className="cyber">
          <img
            src="https://media.istockphoto.com/photos/digital-cloud-security-background-concept-picture-id1331943958?b=1&k=20&m=1331943958&s=170667a&w=0&h=rgUhLZ3zSEoCI07y3dx1LWKne-bEp8qfjMC6dXsbtWU="
            alt="cyber"
          />
        </div>
        <p className="lines">
          Cyber Space is a domain generated from the interconnection of
          computers and telecommunication networks around the world. It is used
          to store, modify, and exchange data via networked and related physical
          structures globally, regardless of physical geography. India has seen
          many attacks on its critical installations and the misuse of social
          media and internet has brought home the threat of cyber-terrorism,
          which cyber security experts say the country is poorly equipped to
          handle. A major challenge to Cyber Space is Security.
          <br /> 
          {" "}
          <br/>
          The Cyber Security program focuses on technology, people,
          information, and processes to enable assured cyber operations in the
          context of adversaries. The program is built on a technical foundation
          of Computing and Information Technology.
        </p>
      </div>
    </div>
  );
};

export default CS;
