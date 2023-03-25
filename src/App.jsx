import React from "react";
import "./index.css";

import Home from "./Home";
import Nav from "./Compo/navBar/Nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import { VisionandMission } from "./Nav Components/AboutUs/VandM";
import { NavFooter } from "./Nav Components/FooterNav/footer";
import PrincipalDesk from "./Nav Components/AboutUs/princiDesk";
import Management from "./Nav Components/AboutUs/Management";

import Whymlritm from "./Nav Components/Admissions/Whymlritm";
import AdmissionProcedure from "./Nav Components/Admissions/AdmissionProcedure";
import Admission from "./Nav Components/Admissions/Admission";
import Coursesintake from "./Nav Components/Admissions/Courses";
import Brochure from "./Nav Components/Admissions/Brochure";
import Howtoapply from "./Nav Components/Admissions/How to apply";
import FeeStructure from "./Nav Components/Admissions/FeeStructure";
import Scholarship from "./Nav Components/Admissions/Scholarship";
import CuttofRanks from "./Nav Components/Admissions/CuttofRanks";


import CoursesOffering from "./Nav Components/Academics/CoursesOffering";
import Syllabus from "./Nav Components/Academics/Syllabus";
import AcademicCalendar from "./Nav Components/Academics/AcademicCalendar";


import ResearchObjectives from "./Nav Components/Research/ResearchObjectives";
import ResearchSupervisors from "./Nav Components/Research/ResearchSupervisors";
import Consultancy from "./Nav Components/Research/Consultancy";
import Patents from "./Nav Components/Research/Patents";
import FundingProjects from "./Nav Components/Research/Funding Projects";
import Publications from "./Nav Components/Research/Publications";


import Results from "./Nav Components/Examination Cell/Results";
import ExaminationProcedure from "./Nav Components/Examination Cell/Examination Procedure";
import EvaluationProcess from "./Nav Components/Examination Cell/EvaluationProcess";
import ResultAnalysis from "./Nav Components/Examination Cell/Result Analysis";
import DisciplineAtExamHalls from "./Nav Components/Examination Cell/Discipline";
import Notification from "./Nav Components/Examination Cell/Notification";
import Schedule from "./Nav Components/Examination Cell/Schedule";


import CampusPlacement2022 from "./Nav Components/Placement Cell/CampusPlacement2022-23";
import PlacementStatistics from "./Nav Components/Placement Cell/PlacementStatistics";


import CSE from "./Compo/Courses/CourseComps/CSE";
import IT from "./Compo/Courses/CourseComps/IT";
import ECE from "./Compo/Courses/CourseComps/ECE";
import MECH from "./Compo/Courses/CourseComps/MECH";
import MBA from "./Compo/Courses/CourseComps/MBA";
import CIVIL from "./Compo/Courses/CourseComps/CIVIL";
import EEE from "./Compo/Courses/CourseComps/EEE";
import AIML from "./Compo/Courses/CourseComps/AI&ML";
import CS from "./Compo/Courses/CourseComps/CS";
import CSIT from "./Compo/Courses/CourseComps/CS-IT";
import DS from "./Compo/Courses/CourseComps/DS";


import ReadMoreawards from "./Compo/Campus Life/Readmore/awards";

import Mediagallery from "./Compo/Facilities/Compo/mediagallery";
import NoRagging from "./Compo/Facilities/Compo/NoRagging";
import Hostel from "./Compo/Facilities/Compo/Hostel";
import Transport from "./Compo/Facilities/Compo/Transport";
import Library from "./Compo/Facilities/Compo/Library";


import Error from "./Compo/Error";


import StudentLogin from "./Compo/navBar/FirstComponent/Logins/Student";
import FacultyLogin from "./Compo/navBar/FirstComponent/Logins/Faculty";
import MailLogin from "./Compo/navBar/FirstComponent/Logins/Mail";

const App = () => {
  return (
    <BrowserRouter basename="/Redesigned-College-Website"> 
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route
          path="/StudentLogin"
          element={
            <div>
              <Nav />
              <StudentLogin />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/FacultyLogin"
          element={
            <div>
              <Nav />
              <FacultyLogin />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/MailLogin"
          element={
            <div>
              <Nav />
              <MailLogin />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/visionandmission"
          element={
            <div>
              <Nav />
              <VisionandMission />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/principaldesk"
          element={
            <div>
              <Nav />
              <PrincipalDesk />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/management"
          element={
            <div>
              <Nav />
              <Management />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/whymlritm"
          element={
            <div>
              <Nav />
              <Whymlritm />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/admissionprocedure"
          element={
            <div>
              <Nav />
              <AdmissionProcedure />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/admissions"
          element={
            <div>
              <Nav />
              <Admission />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/coursesintake"
          element={
            <div>
              <Nav />
              <Coursesintake />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/brochure"
          element={
            <div>
              <Nav />
              <Brochure />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/howtoapply"
          element={
            <div>
              <Nav />
              <Howtoapply />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/feestructure"
          element={
            <div>
              <Nav />
              <FeeStructure />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/scholarships"
          element={
            <div>
              <Nav />
              <Scholarship />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/cutoffranks"
          element={
            <div>
              <Nav />
              <CuttofRanks />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/coursesoffered"
          element={
            <div>
              <Nav />
              <CoursesOffering />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/syllabus"
          element={
            <div>
              <Nav />
              <Syllabus />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/AcademicCalendar"
          element={
            <div>
              <Nav />
              <AcademicCalendar />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/ResearchObjectives"
          element={
            <div>
              <Nav />
              <ResearchObjectives />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/ResearchSupervisors"
          element={
            <div>
              <Nav />
              <ResearchSupervisors />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Consultancy"
          element={
            <div>
              <Nav />
              <Consultancy />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Patents"
          element={
            <div>
              <Nav />
              <Patents />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/FundingProjects"
          element={
            <div>
              <Nav />
              <FundingProjects />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Publications"
          element={
            <div>
              <Nav />
              <Publications />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Results"
          element={
            <div>
              <Nav />
              <Results />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/ExaminationProcedure"
          element={
            <div>
              <Nav />
              <ExaminationProcedure />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/EvalutionProcess"
          element={
            <div>
              <Nav />
              <EvaluationProcess />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/ResultAnalysis"
          element={
            <div>
              <Nav />
              <ResultAnalysis />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/DisciplineAtExamHalls"
          element={
            <div>
              <Nav />
              <DisciplineAtExamHalls />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Circulars"
          element={
            <div>
              <Nav />
              <Notification />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Schedules"
          element={
            <div>
              <Nav />
              <Schedule />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/SelectedStudents(2022-23)"
          element={
            <div>
              <Nav />
              <CampusPlacement2022 />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/PlacementStatistics"
          element={
            <div>
              <Nav />
              <PlacementStatistics />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/CSE" //1
          element={
            <div>
              <Nav />
              <CSE />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/IT" //2
          element={
            <div>
              <Nav />
              <IT />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/ECE" //3
          element={
            <div>
              <Nav />
              <ECE />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/EEE" //4
          element={
            <div>
              <Nav />
              <EEE />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/CIVIL" //5
          element={
            <div>
              <Nav />
              <CIVIL />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/MECH" //6
          element={
            <div>
              <Nav />
              <MECH />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/AI&ML" //7
          element={
            <div>
              <Nav />
              <AIML />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/CS" //9
          element={
            <div>
              <Nav />
              <CS />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/CS-IT" //10
          element={
            <div>
              <Nav />
              <CSIT />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/DS" //8
          element={
            <div>
              <Nav />
              <DS />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Courses/MBA" //11
          element={
            <div>
              <Nav />
              <MBA />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/CampusLife/Awards&Recognitions"
          element={
            <div>
              <Nav />
              <ReadMoreawards />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/MediaGallery"
          element={
            <div>
              <Nav />
              <Mediagallery />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/RaggingFreeCampus"
          element={
            <div>
              <Nav />
              <NoRagging />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Hostel"
          element={
            <div>
              <Nav />
              <Hostel />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Transport"
          element={
            <div>
              <Nav />
              <Transport />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="/Library"
          element={
            <div>
              <Nav />
              <Library />
              <NavFooter />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div>
              <Error />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
