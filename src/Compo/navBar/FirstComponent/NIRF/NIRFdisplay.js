import React from "react";
import "./NIRFstyle.css";

const Display = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
          <p>{item.year}</p>
          <div id="table">
          <table>
            <thead>
              <th colSpan={2}>NIRF ENGINEERING RANK DATA OF {item.year}</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>IR-E-C-19922</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  EMail ID for Comments and Feedback: nirffeedback@mlritm.ac.in
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </>
      ))}
    </>
  );
};

export default Display;
