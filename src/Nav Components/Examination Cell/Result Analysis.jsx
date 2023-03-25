import React from "react";
import {Link} from 'react-router-dom'
const ResultAnalysis = () => {
  return (
    <div className="bodyy">
      <h4 className="heading">Result Analysis</h4>
      <div className="displayblock">
        <div id="resultTable" className="Navtable">
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>S.no.</th>
                <th>Regular Result Analysis</th>
                <th>Supply Result Analysis</th>
                <th>Revaluation Result Analysis</th>
              </tr>
              <tr>
                <th>Semester</th>
                <th>Semester</th>
                <th>Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link to="/ResultAnalysis">I YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">I YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">I YEAR I SEM</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Link to="/ResultAnalysis">I YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">I YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">I YEAR II SEM</Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <Link to="/ResultAnalysis">II YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">II YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">II YEAR I SEM</Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <Link to="/ResultAnalysis">II YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">II YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">II YEAR II SEM</Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <Link to="/ResultAnalysis">III YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">III YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">III YEAR I SEM</Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <Link to="/ResultAnalysis">III YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">III YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">III YEAR II SEM</Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <Link to="/ResultAnalysis">IV YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">IV YEAR I SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">IV YEAR I SEM</Link>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <Link to="/ResultAnalysis">IV YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">IV YEAR II SEM</Link>
                </td>
                <td>
                  <Link to="/ResultAnalysis">IV YEAR II SEM</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultAnalysis;
