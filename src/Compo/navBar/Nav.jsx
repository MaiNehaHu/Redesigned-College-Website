import React from "react";

import FirstComponent from "./FirstComponent/first";
import Image from "./SecondComponent/image";
import NavBar from "./ThirdComponent/NavBar";

const Nav = () => {
  return (
    <>
      <FirstComponent />
      <Image/>
      <NavBar />
    </>
  );
};

export default Nav;
