import React from "react";
import "./nbaTable.css";

export const TableDisplay = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
          <div className="nbatable">
            <h3>{item.Heading}</h3>
            <table>
              <thead>
                <th colSpan={3}>NBA SAR AND CRITERIA REPORT</th>
              </thead>
              <tbody>
                <tr>
                  <th colSpan={2}>SAR REPORT-2022</th>
                  <td rowSpan={13} className="download">
                    <a href={item.downloadlink}>DOWNLOAD</a>
                  </td>
                </tr>
                <tr>
                  <th>S.No</th>
                  <th>CRITERIA</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td> VISION, MISSION AND PROGRAM EDUCATIONAL OBJECTIVES</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>PROGRAM CURRICULUM AND TEACHING - LEARNING PROCESSES</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>COURSE OUTCOMES AND PROGRAM OUTCOMES</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>STUDENTS’ PERFORMANCE  PERFORMANCE </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>FACULTY INFORMATION AND CONTRIBUTIONS</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>FACILITIES AND TECHNICAL SUPPORT</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>CONTINUOUS IMPROVEMENT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>FIRST YEAR ACADEMICS </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>STUDENT SUPPORT SYSTEMS </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    GOVERNANCE, INSTITUTIONAL SUPPORT AND FINANCIAL RESOURCES
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
