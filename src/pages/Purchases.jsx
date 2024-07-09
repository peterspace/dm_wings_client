import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { purchaseEvent } from "../../utils/FacebookPixelEvents";

//purchase events redirect from server
//purchases/?client_ip_address=0.0.0.0&fbclid=123/external_id=user245

//http://localhost:5173/purchases/0.0.0.0/123/user245
// const url = `${frontendURL}/purchases/${client_ip_address}/${fbclid}/${external_id}`;
//     res.redirect(url);
const Purchases = () => {
  const params = useParams();
  const { client_ip_address, fbclid, external_id } = params;
  const [errorMessage, setErrorMessage] = useState();
  const [facebookResponse, setFacebookResponse] = useState();
  const [initialData, setInitialData] = useState();

  console.log({ purchaseParams: params });
  console.log({ initialData });

  console.log({ facebookResponse });
  console.log({ errorMessage });

  //=================={Registration}==================
  useEffect(() => {
    if (external_id) {
      sendPurchase();
    }
  }, [external_id]);

  async function sendPurchase() {
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
      // const data = purchaseEvent()
      const data = await purchaseEvent(userData);
      console.log({ response: data });

      if (data) {
        setFacebookResponse(data);
      }
    } catch (e) {
      alert("Purchase error");
      console.log(e);
      setErrorMessage({ "Purchase error": error.response.data });
    }
  }

  return (
    <div className="w-screen relative [background:linear-gradient(180deg,_#1e1e1e,_#040303)] h-screen overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins">
      <div className="flex flex-row justify-center items-center text-lg text-white font-bold">
        Purchase!
      </div>
    </div>
  );
};

export default Purchases;
