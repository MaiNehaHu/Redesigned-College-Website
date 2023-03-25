import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="navbar">
        <nav id="real">
          <ul className="nav nav-fill">
            <li className="nav-link nav-item" aria-current="page" href="/">
              <Link to="/">
                <p className="realnav">🏠HOME</p>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
              >
                <p className="realnav">ABOUT US</p>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link
                    to="/visionandmission"
                    className="dropdown-item"
                  >
                    Vision and Mission
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/management">
                    Management
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/principaldesk">
                    Principal's desk
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
              >
                <p className="realnav">ADMISSIONS</p>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/whymlritm">
                    Why MLRITM
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/coursesintake"
                  >
                    Courses Intake
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/feestructure">
                    Fee structure
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/admissions">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/admissionprocedure"
                  >
                    Admission Procedure
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/scholarships">
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cutoffranks">
                    EAMCET cutoff Ranks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/brochure">
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/howtoapply">
                    How to Apply
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-bs-toggle="dropdown" role="button">
                <p className="realnav">ACADEMICS</p>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/coursesoffered">
                    Courses Offered
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/syllabus">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/AcademicCalendar">
                    Academic Calendar
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
              >
                <p className="realnav">RESEARCH</p>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    About R & D
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ResearchObjectives">
                    Research Objectives
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ResearchSupervisors">
                    Research Supervisors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Consultancy">
                    Consultancy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Patents">
                    Patents
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/FundingProjects">
                    Funding Projects
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Publications">
                    Publications
                  </Link>
                </li>
              </ul>
            </li>

             {/* courses removed from navbar */}

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
              >
                <p className="realnav">EXAMINATION CELL</p>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Results">
                    Results
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Schedules">
                    Exam Schedules
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/DisciplineAtExamHalls">
                    Decipline at Exam halls
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ExaminationProcedure">
                    Exam Procedures
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/EvalutionProcess">
                    Evalution Process
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Circulars">
                    Circulars/Notifications
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ResultAnalysis">
                    Result Analysis
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                class="nav-link"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
              >
                <p className="realnav">PLACEMENT CELL</p>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/SelectedStudents(2022-23)">
                    Selected Students 2022-2023
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/PlacementStatistics">
                    Placement Statistics
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
