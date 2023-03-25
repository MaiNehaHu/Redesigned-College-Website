import React from "react";
import "../../../Nav Components/StyleForAllNavPages.css";

const NoRagging = () => {
  return (
    <div className="bodyy">
      <h4 className="heading">Anti Ragging</h4>
      <div className="displayblock">
        <p className="lines">
          College has taken various precautions as per AICTE Norms to prevent
          ragging and ensure 100% no-ragging.
          <br />
          {" "}
          <br/>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Anti-Ragging Notification
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Anti-Ragging Affidavit
          </a>
        </p>
      </div>
    </div>
  );
};

export default NoRagging;
