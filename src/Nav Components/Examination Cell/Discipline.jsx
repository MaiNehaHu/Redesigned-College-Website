import React from "react";
import './ExamStyle.css'

const DisciplineAtExamHalls = () => {
  return (
    <div className="bodyy" id="discipline">
      <h4 className="heading">Discipline At Exam Halls</h4>
      <div className="displayblock">
        <p className="lines">
          <ul>
            <li>Student should be present in the Examination hall 15 minutes before the commencement of Examination. No student will be allowed into the Examination hall after the commencement</li>
            <li>Student is prohibited to bring any books, notebooks, loose sheets of paper or mathematical tables to the Examination hall.
                The mathematical table will be supplied by the Chief Controller of Examinations upon request / whenever required. Mathematical instruments will however be allowed to be brought in. 
            </li>
            <li>Student is prohibited to bring mobile phones /Cameras / Bluetooth Devices / Programmable calculators etc., to the Examination hall. </li>
            <li>Students are prohibited from talking to each other, copy or communicate with any person outside the Examination hall. If a student is found violating these rules / committing any other malpractice / behaving in an undisciplined manner / causing disturbance to other students, he/she will be expelled from the Examination hall. He/She will not be allowed for the remaining papers and is liable to rusticated.</li>
            <li>Student is instructed to bring his/her hall ticket and ID Card every day to the EXamination hall and present it for inspection whenever demanded. Otherwise he/she is liable to be sent out of the Examination hall.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default DisciplineAtExamHalls;
