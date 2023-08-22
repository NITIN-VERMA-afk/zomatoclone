import React from "react";

const Login = () => {
  return (
    <>
    <div className="fullscreen"> 
      <div className="loginpage">
        <div className="top-login">
          <h1>Login </h1>
          <button>X</button>
        </div>

        <input
          type="text"
          name=""
          id="phoneno"
          placeholder="Enter your phone no."
        />
        <button className="otp">Send one time password</button>
        <p className="or">or</p>
        <button className="con-email">
         
          <i
            class="fa-solid fa-envelope"
            style={{ color: "#ff0000;" }}
          ></i>
          Continue with Email
        </button>
        <button className="con-google ">
        
          <i class="fa-brands fa-google"></i> Continue with google
        </button>

        <p className="new">new to zomato? create account</p>
      </div>
      </div>
    </>
  );
};

export default Login;
