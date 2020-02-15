import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import {connect} from 'react-redux'


const Navbar = (props) => {
        const {auth,profile_int} = props
        const links =  auth.uid ? <SignedinLinks profile_int={profile_int} /> : <SignedoutLinks />;
    return (
        <nav className="navbar navbar-light bg-white fixed-top shadow-sm ">
        <div className="container">
        <Link className="navbar-brand"  to='/'>
            <img src="img/logo.png"  alt="" className="img-fluid logo-header" />
            CISCA PLANNER
        </Link>
        <nav className="action">
            {auth.isLoaded &&
            links
            }
        </nav>
        </div>
        <span className="border-bottom"></span>
    </nav>
    )
}
const mapStateToProps = (state) =>{
    return {
    auth: state.firebase.auth, 
    profile_int: state.firebase.profile.initials
    }
}       
export default connect(mapStateToProps)(Navbar);