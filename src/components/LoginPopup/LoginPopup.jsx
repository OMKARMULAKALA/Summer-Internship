import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>: <input type="text"placeholder='Your Name' required />}
            <input type="email" placeholder='Enter your Email' required />
            <input type="password" placeholder='Enter your password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already HAve an Account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
  );
}

export default LoginPopup;
