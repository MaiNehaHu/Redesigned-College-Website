import React from "react";
import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

const CSIT = () => {
  return (
    <div className="bodyy coursee" id="cyber">
      <h4 className="heading">Computer Science - Information Technology</h4>
      <div className="displayblock">
        <div id="cyber">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="cyber"
          />
        </div>
        <p className="lines">
          Computer Science and Information Technology (CS & IT) has roots in
          Theoretical and Programming computing. It encompasses a variety of
          topics that relates to computation and applications of computing like,
          development of algorithms, analysis of algorithms, programming
          languages, software design, Data Analytics, Machine Learning, Block
          Chain Technology, Augmented Virtual Reality, Mobile Application
          Development, IoT, Wireless Sensor network, Web Technology.
          <br />
          {""}
          <br/>
          In the present information era (Knowledge era), the Computer
          Science and information technology program will see an exponential
          growth as the future machines work on Artificial Intelligence, IOT and
          Deep Learning.
        </p>
      </div>
    </div>
  );
};

export default CSIT;
