import React from "react";
import "../StyleForAllNavPages.css";
import "./AboutUsStyle.css"

const PrincipalDesk = () => {
  return (
    <>
      <div className="bodyy pricidesk">
        <h4 className="heading">Principal's Desk</h4>
        <div className="displayblock">
          <img
            id="principalSirPic"
            src="https://www.mlritm.ac.in/assets/img/11_1.jpg"
            alt="Principal sir"
          />
          <p className="lines">
            <p id="line1">
              <b>Dr. K Venkateswara Reddy </b>, M. Tech., Ph.D., MISTE, the
              Principal, Marri Laxman Reddy Institute of Technology &
              Management, is young & dynamic Professor of CSE. Engineering
              College and achieved an immense exposure in Academic, Research and
              Administrative spheres at reputed Engineering Colleges.
            </p>
            <br />
            <hr />
            Dr K V Reddy contributed immensely for the growth of institutes by
            introducing the disciplinary innovative in the lifestyle of under
            graduate engineering students. He has established Institute -
            Industry Interaction and Research & Development cells in the
            institute.
            <br />
            <hr />
            <b>Research & Guidance:</b>
            <br />
            Dr. K V Reddy has published 32 research papers at National and
            International Level in the areas of Mathematical modeling and
            Computing Simulations such as advanced Numerical solutions for
            Thermoelasticity and in framing the innovative research explorations
            in Cloud computing, Network security, MANET and other emerging
            fields of computer science.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrincipalDesk;
