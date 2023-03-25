import React from "react";

function DisplayPackages( { data, index } ){
  return (
    <>
      {data[index].map((item) => (
        <div id="PACKAGE">
          <p className="packagedisplay">
            {item.package} LPA in {item.company}
          </p>
        </div>
      ))}
    </>
  );
};

export default DisplayPackages;