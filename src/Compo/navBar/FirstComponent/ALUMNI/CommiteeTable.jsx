import React from "react";
import './alumni.css'

export const CommiteeTable = () => {
  return (
    <>
    <div className="commitee">
      <table>
        <thead>
          <th>S.No.</th>
          <th>Name of the staff</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Remarks</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mrs. B.Sirisha</td>
            <td>Asst. Professor</td>
            <td>MBA</td>
            <td>Coordinator</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mrs. Bhagya Lakshmi</td>
            <td>Asst. Professor</td>
            <td>H&S</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mr. Shiva Ram Prasad</td>
            <td>Asst. Professor</td>
            <td>CSE</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ms. S.Kavitha Chavan</td>
            <td>Asst. Professor</td>
            <td>ECE</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Mr. S.Kranthi Kumar</td>
            <td>Asst. Professor</td>
            <td>MECH</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mr. Srinath</td>
            <td>Asst. Professor</td>
            <td>CIVIL</td>
            <td>Member</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
};
