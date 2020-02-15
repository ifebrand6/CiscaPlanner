import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedinLinks = (props) => {
    return (
    <div>
       
           <button className="btn btn-outline-white" onClick={props.signout}>Log out</button>
           <NavLink to='/profile' className="btn btn-outline-dark">{props.profile_int}</NavLink>
    
    </div>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{   
         signout: () => dispatch(signOut())
         //bindActionCreators(signOut(),dispatch)
    }
}
export default connect(null, mapDispatchToProps)(SignedinLinks);