import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//updated with defi functions
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//=====================================================================================================================================
//======================================================={Local}==============================================================================

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/register`,
      userData,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log({ errormessageRegistration: message });
  }
};

// Register User
export const registerSocial = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/registerSocial`,
      userData,
      { withCredentials: true }
    );
    if (response.data) {
      console.log('Signup Successful...');
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};
// loginSocial
export const loginSocial = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/loginSocial`,
      userData,
      { withCredentials: true }
    );
    if (response.data) {
      console.log('Login Successful...');
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/users/login`, userData);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log({ errormessage: message });
  }
};

//======================================================={Facebook}==============================================================================

// Register User
export const authenticateUserFacebook = async () => {
  try {
    // const response = await axios.get(`${BACKEND_URL}/auth/facebook`);
    const response = await axios.get(`${BACKEND_URL}/users/loginFacebook`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// /success callback
export const successUserFacebook = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/auth/facebook/success`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// /success callback
export const errorUserFacebook = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/auth/facebook/error`);
    if (response.data) {
      console.log('Error authentication via Facebook...');
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

//======================================================={Google}==============================================================================

export const authenticateUserGoogle = async () => {
  try {
    // const response = await axios.get(`${BACKEND_URL}/auth/google`);
    // const response = await axios.get(`${BACKEND_URL}/users/loginGoogle`);
    const response = await axios.get(`${BACKEND_URL}/auth/google`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// /success callback
export const successUserGoogle = async () => {
  try {
    // const response = await axios.get(`${BACKEND_URL}/auth/google/success`);
    const response = await axios.get(`${BACKEND_URL}/users/loginByGoogle`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// /success callback
export const errorUserGoogle = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/auth/google/error`);
    if (response.data) {
      console.log('Error authentication via Google...');
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

//=====================================================================================================================================

// Logout User
export const logoutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}/users/logout`);
    localStorage.removeItem('user');
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/forgotpassword`,
      userData
    );
    console.log(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// Reset Password
export const resetPassword = async (userData, resetToken) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/users/resetpassword/${resetToken}`,
      userData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// Forgot Password
export const forgotOtp = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/forgotOtp`,
      userData
    );
    console.log(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// Reset Password
export const verifyOtp = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/verifyOtp`,
      userData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

export const getPin = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/user/pin`, userData);
    console.log(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/users/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};
// Get User Profile
export const getUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/users/getuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};
// Update Profile
export const updateUser = async (formData) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/users/updateuser`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};
// Update Profile
export const changePassword = async (formData) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/users/changepassword`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

export const registrationConfirmation = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/registrationConfirmation`,
      userData
    );
    if (response.statusText === 'OK') {
      console.log('registration confirmation');
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};



//============={file upload}========================================

export const handleVideoFileUpload = async (uploadFile, name) => {
  const formData = new FormData();
  formData.append('file', uploadFile);
  // formData.append('public_id', name); // created new upload with unique file name // the public_id is the name of the file
  formData.append('upload_preset', 'dancehub'); // created new uplaod

  const url = 'https://api.cloudinary.com/v1_1/datkh2oxv/video/upload/';
  try {
    const response = await fetch(url, {
      method: 'post',
      body: formData,
    });
    const updatedResponse = await response.json();

    return updatedResponse.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export const handleFileUpload = async (uploadFile, name) => {
  const formData = new FormData();
  formData.append('file', uploadFile);
  // formData.append('public_id', name); // created new upload with unique file name // the public_id is the name of the file
  formData.append('upload_preset', 'dancehub'); // created new uplaod
  const url = 'https://api.cloudinary.com/v1_1/datkh2oxv/image/upload/';

  try {
    const response = await fetch(url, {
      method: 'post',
      body: formData,
    });
    const updatedResponse = await response.json();

    return updatedResponse.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export const handleMultipleFileUpload = async (files) => {
  const formData = new FormData();

  let uploadedFiles = [];

  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i]?.uploadFile);
    // formData.append('public_id', files[i]?.name); // created new upload with unique file name // the public_id is the name of the file
    formData.append('upload_preset', 'dancehub'); // created new uplaod
    const url = 'https://api.cloudinary.com/v1_1/datkh2oxv/image/upload/';

    try {
      const response = await fetch(url, {
        method: 'post',
        body: formData,
      });
      const updatedResponse = await response.json();

      const uploadedFile = updatedResponse.secure_url;
      console.log({ uploadedFile: uploadedFiles });

      uploadedFiles.push(uploadedFile);

      console.log({ uploadedFiles2: uploadedFiles });
    } catch (error) {
      console.log(error);
    }
  }
  if (uploadedFiles.length > 0) {
    return uploadedFiles;
  }
};

export const handleMultipleFileUpload2 = async (files) => {
  let uploadedFiles = [];

  if (files.length > 0) {
    files.map(async ({ uploadFile, name }) => {
      const formData = new FormData();
      formData.append('file', uploadFile);
      // formData.append('public_id', name); // created new upload with unique file name // the public_id is the name of the file
      formData.append('upload_preset', 'dancehub'); // created new uplaod
      const url = 'https://api.cloudinary.com/v1_1/datkh2oxv/image/upload/';

      try {
        const response = await fetch(url, {
          method: 'post',
          body: formData,
        });
        const updatedResponse = await response.json();

        const downloadedFile = updatedResponse.secure_url;
        // const downloadedFile = updatedResponse.url.toString();
        uploadedFiles.push(downloadedFile);
      } catch (error) {
        console.log(error);
      }
    });

    if (uploadedFiles.length > 0) {
      return uploadedFiles;
    }
  }
};
