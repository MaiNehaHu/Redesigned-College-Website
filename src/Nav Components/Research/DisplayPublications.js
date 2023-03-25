import React from "react";

const DisplayPublications = ({ index }) => {
  return (
    <>
      {index === 0 && <p className="lines"> Neha is a bit busy.It'll be updated soon.</p>}
      {index === 1 && <p className="lines"> Neha is a bit busy. It'll be updated soon.</p>}
      {index === 2 && <p className="lines"> Neha is a bit busy.It'll be updated soon.</p>}
    </>
  );
};

export default DisplayPublications;
