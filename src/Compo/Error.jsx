import React from "react";

const Error = () => {
  return (
    <>
      <div style={{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1 style={{textAlign:"center", fontSize:"80px",fontFamily:"kalam",fontWeight:"900", color:"navy"}}>404</h1>
        <h3 style={{textAlign:"center", fontSize:"30px",fontFamily:"kalam", color:"red"}}>Page Not Found</h3>
        <h5 style={{textAlign:"center", fontSize:"30px",fontFamily:"kalam",color:"navy"}}>Kindly search with Valid Route Name</h5>
      </div>
    </>
  );
};

export default Error;
