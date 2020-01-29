import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Cisca Planner</Link>
                <SignedinLinks />
                <SignedoutLinks />
            </div>
        </nav>
    )
}
export default Navbar;