import React from "react";
import { NavLink } from "react-router-dom";

const SignedinLinks = () => {
    return (
    <div>
       <ul className="right">
           <li><NavLink to='/create'>New Project</NavLink></li>
           <li><NavLink to='/'>Log out</NavLink></li>
           <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
       </ul> 
    </div>
    )
}
export default SignedinLinks;