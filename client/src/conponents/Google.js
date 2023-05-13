// import React, { useState } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// const clientId =
//     "481638708804-se3hsmvqdj5tft7524sal3se1b9dtt7v.apps.googleusercontent.com";

// function Google() {
//     const [showloginButton, setShowloginButton] = useState(true);
//     const [showlogoutButton, setShowlogoutButton] = useState(false);


//     const onLoginSuccess = (res) => {
//         console.log("Login Success:", res.profileObj);
//         setShowloginButton(false);
//         setShowlogoutButton(true);
//     };

//     const onLoginFailure = (res) => {
//         console.log("Login Failed:", res);
//     };

//     const onSignoutSuccess = () => {
//         alert("You have been logged out successfully");
//         console.clear();
//         setShowloginButton(true);
//         setShowlogoutButton(false);
//     };

//     return (
//         <div>
//             <GoogleLogin
//                 clientId={clientId}
//                 buttonText="Login"
//                 onSuccess={onLoginSuccess}
//                 onFailure={onLoginFailure}
//                 cookiePolicy={"single_host_origin"}
//             />
//         </div>
//     );
// }
// export default Google;
