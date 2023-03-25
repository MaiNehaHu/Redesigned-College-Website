import React from "react";
import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

//5
const MECH = () => {
  return (
    <div className="bodyy coursee" id="mech">
      <h4 className="heading">Mechanical Engineering</h4>
      <div className="displayblock">
        <div id="mech">
          <img
            src="https://www.educationafter12th.com/wp-content/uploads/2016/06/Mechanical-Engineering-in-india-jobs-eligiblity-syllabus.jpg"
            alt="mech"
          />
        </div>
        <p className="lines">
          The Department of Mechanical Engineering, established in the year
          2009, offers Under Graduate (B.Tech) courses and Post Graduate
          (M.Tech) programmes. The departmental faculty consists of erudite
          teachers who are constantly engaged in undertaking innovative research
          work of original nature and subsequent publications. Many of the
          members of the faculty have earned to their credit quite a number of
          praiseworthy research papers published in the national and
          international journals of repute. The department organizes seminars
          and workshops on advanced topics every year. The department has very
          good Industry-Institute interaction and has conducted several short
          term courses for working professionals from industry. The faculty are
          actively engaged in research and consultancy works in addition to
          regular academic work.
          <br />
          {" "} 
          <br />
          The department provides ample laboratory facilities and hands-on
          training to the Undergraduate students both in the conventional
          subjects as also in the emerging fields of specialization. The
          department offers B.Tech courses in the discipline of Mechanical
          Engineering. It also offers M.Tech programmes in CAD/CAM. The
          department has well established CAD/CAM laboratory with state of the
          art hardware and software. The basic laboratories such as heat engines
          laboratory, Automation laboratory, Metrology laboratory, and Heat
          transfer laboratory, Fuel testing laboratory, Machine Tools
          laboratory, Material Science laboratory, vibration laboratory and
          Industrial Engineering laboratory have full-fledged facilities. The
          department has sprawling workshop comprising of machine shop, foundry,
          smithy, sheet metal, plumbing, welding, and fitting and carpentry
          sections.
        </p>
      </div>
    </div>
  );
};

export default MECH;
