import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { leadEvent } from "../../utils/FacebookPixelEvents";

//lead events redirect from server
//leads/0.0.0.0/123/user245
// const url = `${frontendURL}/leads/${client_ip_address}/${fbclid}/${external_id}`;
//     res.redirect(url);
const Leads = () => {
  const params = useParams();
  const { client_ip_address, fbclid, external_id } = params;
  const [errorMessage, setErrorMessage] = useState();
  const [facebookResponse, setFacebookResponse] = useState();
  const [initialData, setInitialData] = useState();

  console.log({ leadParams: params });
  console.log({ initialData });
  console.log({ facebookResponse });
  console.log({ errorMessage });

  //=================={Registration}==================
  useEffect(() => {
    sendLead();
  }, [external_id]);

  async function sendLead() {
    let userData = "";
    if (!external_id) {
      return;
    }

    if (client_ip_address || fbclid || external_id) {
      userData = {
        client_ip_address: client_ip_address || "",
        fbclid: fbclid || "",
        external_id: external_id || "",
      };
    }

    setInitialData(userData);

    try {
      const data = await leadEvent(userData);
      console.log({ response: data });

      if (data) {
        setFacebookResponse(data);
      }
    } catch (e) {
      alert("Facebook error");
      console.log(e);
      // setErrorMessage({ "Lead error": error.response.data });
      setErrorMessage({ "Lead error": e.response.data });
    }
  }

  return (
    <div className="w-screen relative [background:linear-gradient(180deg,_#1e1e1e,_#040303)] h-screen overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins">
      <div className="flex flex-row justify-center items-center text-lg text-white font-bold">
        Lead!
      </div>
    </div>
  );
};

export default Leads;
