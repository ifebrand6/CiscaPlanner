import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedinLinks = (props) => {
    return (
    <div>
       <ul className="right">
           <li><NavLink to='/create'>New Project</NavLink></li>
           <li><button className="link-button" onClick={props.signout}>Log out</button></li>
           <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
       </ul> 
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