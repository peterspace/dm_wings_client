import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className="w-screen relative [background:linear-gradient(180deg,_#1e1e1e,_#040303)] h-screen overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins">
      <div className="flex flex-row justify-center items-center text-lg text-white font-bold">
        Welcome Home!
        {/* <img
          className="h-full relative object-cover overflow-hidden shrink-0"
          alt=""
          src="/welcome.png"
        /> */}
      </div>
    </div>
  );
};

export default Home;
