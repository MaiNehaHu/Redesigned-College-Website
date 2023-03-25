import React from "react";
import '../Academics/AcademicsStyle.css';

import '../StyleForAllNavPages.css'

const ResearchSupervisors = () => {
  return (
    <div className="bodyy" id="Supervisors">
      <h4 className="heading">Research Supervisors</h4>
      <div className="displayblock">
        <div id="supervisors" className="Navtable">
          <table>
            <thead>
              <th>S.No</th>
              <th>Name of Guide</th>
              <th>Name of Student</th>
              <th>Roll Number</th>
              <th>Registered university</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr.GADE NARSINGARAO</td>
                <td>Mohd.Abdul Shukur</td>
                <td>1503PH1723</td>
                <td>
                  JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY, HYDERABAD,
                  TELANGANA
                </td>
                <td>REGISTERED-2017</td>
              </tr>
              <tr>
                <td>2</td>
                <td>DR.BACHU SRINIVAS</td>
                <td>N.RAMYATEJA</td>
                <td>183040063</td>
                <td>KL UNIVERSITY, VIJAYAWADA, ANDHRA PRADESH</td>
                <td>REGISTERED-2019</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DR.K.SURESH BABU</td>
                <td>P.GEETHA SWAROOPA</td>
                <td>13323009</td>
                <td>KL UNIVERSITY, VIJAYAWADA, ANDHRA PRADESH</td>
                <td>AWARDED-2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResearchSupervisors;
