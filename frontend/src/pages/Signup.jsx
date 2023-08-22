import React from 'react'


const Signup = () => {
  return (
    
      <div className="fullscreen"> 
       <div className="signup">
        <div className="sign-up-top">
        <h1>signup </h1>
          <button className='btn-x'>X</button>


        </div>
        <div className="input-boxes">
        <input className='fullname' type="text" placeholder='Full name' />
        <input  className='fullname' type="text" placeholder='Email' />

        </div>
       <span className="agree">
        <input type="checkbox" name="" id="" />
        <p className='agree'>
I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</p>
        </span> 
           <button className='create-account'>create-account </button>

        <p className="or">or</p>
        <button className="sign-up-continue">
        
          <i class="fa-brands fa-google"></i> Continue with google
        </button>
        <p className='aha'>already have account? Login</p>
        
        



       </div>
       </div>
   
  )
}

export default Signup
