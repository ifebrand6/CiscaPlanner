import React from "react";
import { NavLink } from "react-router-dom";

const SignedoutLinks = () => {
    return (
    <div>
    <ul className="right">
        <NavLink className="btn btn-outline-dark" to='/login'>Log in</NavLink>
    </ul> 
    </div>
    )
}
export default SignedoutLinks;