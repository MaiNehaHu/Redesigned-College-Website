import React from "react";
import "./ExamStyle.css";

const DisplaySchedule = ({ index }) => {
  return (
    <>
      {index === 0 && (
        <>
          <h4 className="heads">B.tech</h4>
          <div id="Bschedule" className="Navtable">
            <table>
              <thead>
                <th>Updated Dates</th>
                <th>Schedule</th>
              </thead>
              <tbody>
                <tr>
                  <td>14/10/2022</td>
                  <td>
                    CBT NOTIFICATION FOR 2021 ADMITTED BATCH - I B.TECH II
                    SEM(MLRS-R20) - OCTOBER 2022
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {index === 1 && (
        <>
        <h4 className="heads">M.tech</h4>
          <div id="Mschedule" className="Navtable">
            <table>
              <thead>
                <th>Updated Dates</th>
                <th>Schedule</th>
              </thead>
              <tbody>
                <tr>
                  <td>05/09/2022</td>
                  <td>
                    II M.TECH I SEM(MLRS-R19) - SUPPLY EXAMINATIONS TIME TABLE -
                    SEPTEMBER 2022
                  </td>
                </tr>
                <tr>
                  <td>05/09/2022</td>
                  <td>
                    II M.TECH I SEM(MLRS-R20) - SUPPLY EXAMINATIONS TIME TABLE -
                    SEPTEMBER 2022
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {index === 2 && (
        <>
        <h4 className="heads">MBA</h4>
          <div id="MBAschedule" className="Navtable">
            <table>
              <thead>
                <th>Updated Dates</th>
                <th>Schedule</th>
              </thead>
              <tbody>
                <tr>
                  <td>05/09/2022</td>
                  <td>
                    II MBA I SEM(MLRS-R19) - SUPPLY EXAMINATIONS TIME TABLE -
                    SEPTEMBER 2022
                  </td>
                </tr>
                <tr>
                  <td>05/09/2022</td>
                  <td>
                    II MBA I SEM(MLRS-R20) - SUPPLY EXAMINATIONS TIME TABLE -
                    SEPTEMBER 2022
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default DisplaySchedule;
