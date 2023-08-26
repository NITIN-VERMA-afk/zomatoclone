import React,{useState} from "react";
import axios from 'axios'

const Login = () => {

  const [Text,setText]=useState({
    email:"",
    password:"",
  })


  const loginuser= (e)=>{
    e.preventDefault();
    axios.get('/')
  }
  
 

  return (
    <>
      <form  onSubmit={loginuser} action="post">
        <div className="fullscreen">
          <div className="loginpage">
            <div className="top-login">
              <h1>Login </h1>
              <button>X</button>
            </div>

            <input
              
              type="Text"
              name=""
              id="phoneno"
              placeholder="Enter your phone no."
              value={Text.email} onChange={(e)=>setText({...Text,Email:e.target.value})}
            />
            <button  className="otp">Send one time password</button>
            <p className="or">or</p>
            <button className="con-email">
              <i class="fa-solid fa-envelope" style={{ color: "#ff0000;" }}></i>
              Continue with Email
            </button>
            <button className="con-google ">
              <i class="fa-brands fa-google"></i> Continue with google
            </button>

            <p className="new">new to zomato? create account</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
