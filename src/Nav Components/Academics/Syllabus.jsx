import React from "react";
import { Link } from "react-router-dom";
import "../StyleForAllNavPages.css";
import "./AcademicsStyle.css";

const Syllabus = () => {
  return (
    <div className="bodyy" id="syllabus">
      <h4 className="heading">Syllabus</h4>
      <div className="displayblock">
        <img
          src="https://images.shiksha.com/mediadata/images/articles/1611722841phpI5SJOq.jpeg"
          alt="syllabus"
        />
        <h3 className="heads head1">
          Academic Regulations, Course Structure and Detailed Syllabus under
          Autonomous Status
        </h3>
        <br />
        <h3 className="heads">
          Course Structure, Syllabus and Regulation rules
        </h3>
        <br />
        <hr />
        <a href="/" target="_blank" rel="noopener noreferrer">
          <h3 className="heads">R20 B.TECH REGULATON AND DETAIL SYLLABUS</h3>
        </a>

        <div id="R20CourseStruc" className="Navtable">
          <table>
            <thead>
              <th colSpan={2}>R20 Regulation Course Structure</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH ECE
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH CSE
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH IT R20
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH CS& IT
                  </Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 CSE AI&ML
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH CSE(Cyber security)
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH CSE (Data Science)
                  </Link>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH-EEE
                  </Link>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH Civil
                  </Link>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH MECH
                  </Link>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    R20 B.TECH REGULATON AND DETAIL SYLLABUS
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="R20Sylla" className="Navtable">
          <table>
            <thead>
              <th colSpan={2}>R20 Regulation SYLLABUS upto 3rd Year</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Computer Science and Engineering
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Computer Science and Engineering(AI&ML)
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Computer Science and Engineering(Data Science)
                  </Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Computer Science and Engineering(Cyber Security)
                  </Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Computer Science and Information Technology
                  </Link>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Information Technology
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Electonics and Communication Engineering
                  </Link>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Electricel and Electronics Engineering
                  </Link>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Civil Engineering
                  </Link>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <Link href="/academics/syllabus" rel="noopener noreferrer">
                    Mechanical Engineering
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
