import React from "react";

import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

//6
const AIML = () => {
  return (
    <>
      <div className="bodyy coursee" id="aiml">
        <h4 className="heading">Artificial Intelligence and Machine Learning</h4>
        <div className="displayblock">
          <div id="aiml">
            <img
              src="https://thumbs.dreamstime.com/b/digital-brain-background-abstract-digital-polygonal-brain-circuit-background-artificial-intelligence-innovation-concept-d-101783239.jpg"
              alt="aiml"
            />
          </div>
          <p className="lines">
            Artificial Intelligence[AI] and Machine Learning[ML] are correlated
            each other. AI is a bigger concept to create intelligent machine
            that can simulate human thinking capability where as ML is a subset
            of AI that allow a machines to learn from Data. Artificial
            Intelligence (AI) and Machine Learning(ML) has become an integral
            part of technology in our daily lives, getting news updates ,driving
            to office, searching for a restaurant, getting medical alerts and
            recommendations on social media are all using AI and ML. With
            increase in usage, there is a significant requirement of researchers
            in the areas ofAi & ML.
            <br /> 
            {" "}
            <br/>
            This specialization is designed to enable
            students to build intelligent machines, software, or applications
            with a cutting-edge combination of machine learning, analytics and
            visualization technologies. The main goal of artificial intelligence
            and machine learning is to program computers to use example data or
            experience to solve a given problem.
            <br /> 
            {" "}
            <br/>
            This program will provide students an opportunity to learn
            both foundational and experimental components of Artificial
            Intelligence and Machine Learning.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIML;
