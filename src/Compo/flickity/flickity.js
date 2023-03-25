import React from "react";
import "./flickity.css";

function flickity() {
  //bootstrap
  return (
    <>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.mlritm.ac.in/assets/images/banner1.jpg"
                className="d-block w-100"
                alt="first picture"
              />
              <p className="pagename">MLRITM college campus</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.mlritm.ac.in/assets/images/banner_new1.jpg"
                className="d-block w-100"
                alt="second picture"
              />
              <p className="pagename">Traditional day</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.mlritm.ac.in/assets/images/banner_new3.jpg"
                className="d-block w-100"
                alt="third picture"
              />
              <p className="pagename">Traditional day</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.mlritm.ac.in/assets/images/banner2.jpg"
                className="d-block w-100"
                alt="fourth picture"
              />
              <p className="pagename">Graduation day of 2021</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.mlritm.ac.in/assets/images/banner5.jpg"
                className="d-block w-100"
                alt="fivth picture"
              />
              <p className="pagename">Graduation day of 2022</p>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.mlritm.ac.in/assets/images/banner_new.jpg"
                className="d-block w-100"
                alt="sixth picture"
              />
              <p className="pagename">Ranking/Rating of 2021</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default flickity;
