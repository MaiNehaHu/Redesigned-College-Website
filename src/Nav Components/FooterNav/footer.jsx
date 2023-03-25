import React from "react";
import "./footerstyle.css";
import { Followus } from "../../Compo/Footer/Followus";

/**When nav components will get opened . this nav will get appeared.
 * We have to maintain it same as the footer which is on main pages i.e. /
 */
export const NavFooter = () => {
  return (
    <>
      <div id="navfooter">
        <div className="FooterBox">
          <div>
            <Followus />
          </div>
        </div>
      </div>
    </>
  );
};
