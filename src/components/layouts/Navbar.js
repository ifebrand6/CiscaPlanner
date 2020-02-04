import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import {connect} from 'react-redux'


const Navbar = (props) => {
        const {auth,profile_int} = props
        const links =  auth.uid ? <SignedinLinks profile_int={profile_int} /> : <SignedoutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="">
                <Link to='/' className="brand-logo left">Cisca Planner</Link>
                {auth.isLoaded &&
                links
                }
            </div>
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