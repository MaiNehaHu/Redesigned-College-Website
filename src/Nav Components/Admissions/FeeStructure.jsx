import React from "react";
import "../StyleForAllNavPages.css";

const FeeStructure = () => {
  return (
    <div id="feestructure" className="bodyy">
      <h4 className="heading">Fee Structure</h4>
      <div className="displayblock">
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
      </div>
    </div>
  );
};

export default FeeStructure;
