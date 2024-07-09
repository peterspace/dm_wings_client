import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { landingPageEvent } from "../../utils/FacebookPixelEvents";

//lead events redirect from server
//leads/0.0.0.0/123/user245
// const url = `${frontendURL}/leads/${client_ip_address}/${fbclid}/${external_id}`;
//     res.redirect(url);
const SignUp = () => {
  //=================={Registration}==================
  useEffect(() => {
    landingPageEvent();
  }, []);

  return (
    <div className="w-screen relative [background:linear-gradient(180deg,_#1e1e1e,_#040303)] h-screen overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins">
      <div className="flex flex-row justify-center items-center text-lg text-white font-bold">
        SignUp!
      </div>
    </div>
  );
};

export default SignUp;
