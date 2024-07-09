const unixTimeNow = Math.floor(Date.now() / 1000);
console.log({ unixTimeNow });

const min = 1;
const max = 9999;
let randomNumberFloat = Math.random() * (max - min) + min;
const random = Math.round(randomNumberFloat);
console.log({ random });

export const signUpOTPVerificationEvent = () => {
  fbc("track", "SignUp-OTP-Verification");
};

export const signUpPhoneNumberEvent = () => {
  fbc("track", "SignUp-PhoneNumber-Entered");
};

export const landingPageEvent = () => {
  fbc("track", "Lead-LandingPage");
};

export const kycUploadEvent = () => {
  fbc("track", "KYC-Upload");
};

// export const leadEvent = async () => {
//   fbc("track", "Lead");
// };

// export const leadEvent = async (data) => {
//   fbc("track", "Lead", {
//     value: data.value,
//     currency: data.currency || "USD",
//   });
// };

// sent data={value, data,external_id, fbclid, client_ip_address }
// export const leadEvent = async (data) => {
//   fbq("track", "Lead", {
//     advertiser_tracking_enabled: 1,
//     application_tracking_enabled: 1,
//     value: data.value ? data.value : 0,
//     currency: "USD",
//     event_time: data.date ? data.date : unixTimeNow,
//     external_id: data.external_id ? data.external_id.toString() : "user123",
//     client_ip_address: client_ip_address || "192.168.1.1",
//     client_user_agent:
//       client_user_agent ||
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//     fbclid: data.fbclid || null, // Include fbclid if available
//   });
// };

export const leadEvent = async (data) => {
  fbc("track", "Lead", {
    advertiser_tracking_enabled: 1,
    application_tracking_enabled: 1,
    value: data.value ? data.value : 0,
    currency: "USD",
    event_time: data.date ? data.date : unixTimeNow,
    external_id: data.external_id ? data.external_id.toString() : "user123",
    client_ip_address: client_ip_address || "192.168.1.1",
    client_user_agent:
      client_user_agent ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    fbclid: data.fbclid || null, // Include fbclid if available
  });
};

// export const purchaseEvent = async () => {
//   fbc("track", "Purchase");
// };

// sent data={value, data,external_id, fbclid, client_ip_address }
export const purchaseEvent = async (data) => {
  fbc("track", "Purchase", {
    advertiser_tracking_enabled: 1,
    application_tracking_enabled: 1,
    value: data.value ? data.value : 10,
    currency: "USD",
    event_time: data.date ? data.date : unixTimeNow,
    external_id: data.external_id ? data.external_id.toString() : "user123",
    client_ip_address: client_ip_address || "192.168.1.1",
    client_user_agent:
      client_user_agent ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    fbclid: data.fbclid || null, // Include fbclid if available
  });
};
