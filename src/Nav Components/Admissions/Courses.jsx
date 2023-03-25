import React from "react";
import './AdmissionsStyle.css'
import {Link} from 'react-router-dom'

const Coursesintake = () => {
  return (
    <div className="bodyy" id="courses">
      <h4 className="heading">UG / PG Programmes Intake</h4>
      <div className="displayblock">
        <div id="ugtable" className="Navtable">
          <table>
            <thead>
              <th>Program</th>
              <th>Specialization</th>
              <th>Students Intake</th>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={11}>UG Courses</td>
                <td><Link to="/Courses/CSE">Computer Science and Engineering(CSE)</Link></td>
                <td>180</td>
              </tr>
              <tr>
                <td><Link to="/Courses/AI&ML">Artificial Intelligence and Machine Learning(AI and ML)</Link></td>
                <td>180</td>
              </tr>
              <tr>
                <td><Link to="/Courses/CS">Cyber Security</Link></td>
                <td>60</td>
              </tr>
              <tr>
                <td><Link to="/Courses/DS">Data Science</Link></td>
                <td>180</td>
              </tr>
              <tr>
                <td><Link to="/Courses/CS-IT">Computer Science and Information Technlolgy</Link></td>
                <td>90</td>
              </tr>
              <tr>
                <td><Link to="/Courses/IT">Information Technology(IT)</Link></td>
                <td>120</td>
              </tr>
              <tr>
                <td><Link to="/Courses/ECE">Electronics and Communication Engineering(ECE)</Link></td>
                <td>180</td>
              </tr>
              <tr>
                <td><Link to="/Courses/EEE">Electrical and Electronics Engineering(EEE)</Link></td>
                <td>30</td>
              </tr>
              <tr>
                <td><Link to="/Courses/CIVIL">Civil Engineering</Link></td>
                <td>30</td>
              </tr>
              <tr>
                <td><Link to="/Courses/MECH">Mechanical Engineering(ME)</Link></td>
                <td>30</td>
              </tr>
              <tr>
                <td colSpan={1}>Total</td>
                <td>1080</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="pgtable" className="Navtable">
          <table>
            <thead>
              <th>Program</th>
              <th>Specialization</th>
              <th>Students Intake</th>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6}>PG Courses</td>
                <td>M.Tech CAD/CAM</td>
                <td>18</td>
              </tr>
              <tr>
                <td>M.Tech Computer Science Engineering</td>

                <td>18</td>
              </tr>
              <tr>
                <td>M.Tech Embedded Systems</td>

                <td>18</td>
              </tr>
              <tr>
                <td>M.Tech Structures</td>

                <td>18</td>
              </tr>
              <tr>
                <td><Link to="/Courses/MBA">Master of Businees Administration</Link></td>
                <td>120</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>192</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Coursesintake;
