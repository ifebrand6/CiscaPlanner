import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import {connect} from 'react-redux'


const Navbar = (props) => {
        const {auth} = props
        const links =  auth.uid ? <SignedinLinks /> : <SignedoutLinks />;
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
    auth: state.firebase.auth 
    }
}       
export default connect(mapStateToProps)(Navbar);