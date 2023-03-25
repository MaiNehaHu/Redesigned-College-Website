import React from "react";
import './Style.css';

const PlacementStatistics = () => {
  return (
    <div className="bodyy" id="Staticstics">
      <h4 className="heading">CAMPUS PLACEMENTS</h4>
      <div className="displayblock">
        <div>
        <img src="https://www.oysterconnect.com/blogs/wp-content/uploads/2019/10/The-Exam-Cram_-How-to-Manage-That-Last-Minute-Prep-Stress_-9-1.png" alt="placement"  />
        </div>
        <h6 className="heads">Placement statistics</h6>
        <div className="Navtable">
          <table>
            <thead>
              <th>Placement Statistics</th>
              <th>2018-2019</th>
              <th>2019-2020</th>
              <th>2020-2021</th>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Students Eligible for Placements</td>
                    <td>451</td>
                    <td>479</td>
                    <td>670</td>
                </tr>
                <tr>
                    <td>Number of Students Placed</td>
                    <td>311</td>
                    <td>361</td>
                    <td>553</td>
                </tr>
                <tr>
                    <td>Percentage of Students Placed(%)</td>
                    <td>68.95</td>
                    <td>75.36</td>
                    <td>82.53</td>
                </tr>
                <tr>
                    <td>Number of Companies Visited</td>
                    <td>53</td>
                    <td>57</td>
                    <td>88</td>
                </tr>
                <tr><td>Median Salary</td>
                <td>3.2 Lakhs per Annum</td>
                <td>3.6 Lakhs per Annum </td>
                <td>3.8 Lakhs per Annum</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
