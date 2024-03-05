import React, { useState } from 'react'
import './login.css'

const handleClick=()=>(
    console.log(data,"initial value")
)

const Login = () => {
    const [action,setAction] = useState("Login")
  return (
   
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <input type="text" placeholder=' Name' />
            </div>}

            {/* <div className="input">
                <input type="text" placeholder=' Name' />
            </div> */}
            <div className="input">
                <input type="Email" placeholder=' Email' />
            </div>
            <div className="input">
                <input type="Password" placeholder=' Password' />
            </div>
        </div>
        <div className="forgot-password">Reset Password ? <span><a href="\">Click Here</a></span></div>
        <div className="submit-container">
            {/* <div className="submit">Sign Up</div>
            <div className="submit">Log In</div> */}
            <button className={action==="Login"?"submit gray":"submit"}onClick={()=>{handleClick}}>Sign Up</button>
            <button className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Log In")}}>Log In</button>
        </div>
    </div>
  )
}

export default Login