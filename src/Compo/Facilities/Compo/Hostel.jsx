import React from "react";
import "./mediagallery.css";
import "../../../Nav Components/StyleForAllNavPages.css";

const Hostel = () => {
  return (
    <div className="bodyy" id="hostel">
      <h4 className="heading">Media Gallery</h4>
      <div className="displayblock">
        <p className="lines">
          MLRITM has hostel facility for 250 boys and 250 girls students. The
          hostel functions under the overall supervision of Sri M. Raja Sekhar
          Reddy, the Secretary of the society/college. All first year students
          should stay in the hostel and faculty members of the college are
          appointed as wardens of the hostels. The maintanance discipline,
          allotment of rooms will be looked after by these wardens. They also
          attend to the day to day needs and requirements of the hostelers.
          <br /> <br />
          In addition to the hostel, there is a 600 seated seated capacity
          canteen in the college.
          <br /> <br />
          The menu for breakfast, lunch, snacks is being looked after by canteen
          committee at subsidized and reasonable rates.There are a couple food
          courts at different locations in the college offering different
          locations in the college. Offering different food items based on the
          demand and requirement of students.
        </p>
        <div>
          <>
            <img
              src="https://www.mlritm.ac.in/assets/img/bh_0.jpg"
              alt="Boys Hostel"
            />
            <p className="lines">Boys Hostel</p>
          </>
          <>
            <img
              src="https://www.mlritm.ac.in/assets/img/gh_0.png"
              alt="girls hostel"
            />
            <p className="lines">Girls Hostel</p>
          </>
          <>
            <img
              src="https://www.mlritm.ac.in/assets/img/hostel_mess_0.jpg"
              alt="mess"
            />
            <p className="lines">
                Mess
            </p>
          </>
          <>
            <img
              src="https://www.mlritm.ac.in/assets/img/Hostel_Room_0.jpg"
              alt="room"
            />
            <p className="lines">
                Room
            </p>
          </>
          <>
            <img
              src="https://www.mlritm.ac.in/assets/img/Kicthen_0.jpg"
              alt="kitchen"
            />
            <p className="lines">
                Kitchen
            </p>
          </>
          <>
            <img
              src="https://www.mlritm.ac.in/assets/img/IMG_20150619_125033_0.jpg"
              alt="mess"
            />
            <p className="lines">Mess</p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
