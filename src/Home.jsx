import React from "react";
import "./index.css";
import Nav from "./Compo/navBar/Nav";
import Niche from "./Compo/navKeNiche/niche";
import Flickity from "./Compo/flickity/flickity";
import Placements from "./Compo/Placements/Placements";
import { Courses } from "./Compo/Courses/Courses";
import { CampusLife } from "./Compo/Campus Life/CampusLife";
import ContactUs from "./Compo/contactus/contact";
import { Facilities } from "./Compo/Facilities/Fac";
import { CenterOfExcel } from "./Compo/Center of Excellence/Excell";
import { Footer } from "./Compo/Footer/footer";


const Home = () => {
  return (
    <>
      <Nav />
      <Niche />
      <Flickity />
      <Placements />
      <Courses />
      <CampusLife />
      <Facilities />
      <CenterOfExcel />

      <Footer />
      <ContactUs />
    </>
  );
};
export default Home;
