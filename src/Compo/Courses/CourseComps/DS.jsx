import React from "react";
import "./CourseStyle.css";
import "../../../Nav Components/StyleForAllNavPages.css";

const DS = () => {
  return (
    <>
      <div className="bodyy coursee" id="cyber">
        <h4 className="heading">Data Science</h4>
        <div className="displayblock">
          <div className="cyber">
            <img
              src="https://www.ethans.co.in/wp-content/uploads/2020/04/data-science-img.jpg"
              alt="cyber"
            />
          </div>
          <p className="lines">
            In today’s Digital world, most businesses and industries will have a
            dire need to analyze their huge volume of data, to glean new
            insights which will help them in revenue generation and business
            development. Organizations across the globe are excited by the
            prospect of "data science" as a complement to traditional
            knowledge-driven decision-making process.
            <br />
            {" "}
            <br/>
            It is very much evident from the fact that Social media and software
            product giants like, Facebook, Google, Amazon, Microsoft, IBM,
            LinkedIn and many other Fortune-500 organizations are already making
            huge investments in large scale data analytics to help them exploit
            the power of extracting wisdom from the massive raw data being
            generated at a very high pace in today’s world.
            <br />
            {" "}
            <br/>
            The Data Science, basically is a combination of important domains
            namely Mathematics, Computer Programming, Statistics and Design
            which is applied in order to successfully manage Digital Data. The
            Program offered is a modern pedagogy designed to meet the global
            demand for qualified Data Scientists.
          </p>
        </div>
      </div>
    </>
  );
};

export default DS;
