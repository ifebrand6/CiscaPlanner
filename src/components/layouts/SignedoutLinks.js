import React from "react";
import { NavLink } from "react-router-dom";

const SignedoutLinks = () => {
    return (
    <div>
    <ul className="right">
        <li><NavLink to='/'>Signup</NavLink></li>
        <li><NavLink to='/'>Log in</NavLink></li>
    </ul> 
    </div>
    )
}
export default SignedoutLinks;