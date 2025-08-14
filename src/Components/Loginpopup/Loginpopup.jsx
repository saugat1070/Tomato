import React, { useState } from 'react'
import "./Loginpopup.css"
import { assets } from '../../assets/frontend_assets/assets'


export default function Loginpopup({showLogin,setShowLogin}) {


    const [currentState,setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className='login-popup-title'>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(!showLogin)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {
                    currentState ==="Sign Up" ?<input type="text" placeholder='Your Name' required /> : <></>
                }
                <input type="email" placeholder='example@gmail.com' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>
                {currentState === "Sign Up" ? "Create account" : "Login"}
            </button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {
                currentState === "Login" ?
                 <p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> :
                <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>

            }
            
        </form>
    </div>
  )
}
