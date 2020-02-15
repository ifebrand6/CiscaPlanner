import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import {Link } from 'react-router-dom'

 class SignIn extends Component {
     state = {
         email: '',
         password: ''
     }
     handleSubmit = (e)=> {
         e.preventDefault();
         //console.log(this.state)
        this.props.signIn(this.state);
        //console.log(this.state)
     }
     handleChange = (e)=> {
         this.setState({
             [e.target.name]: e.target.value
         })
         //console.log(e)
     }
    render() {
        
        const {authError,auth} = this.props;
        if(auth.uid) return <Redirect to='/'></Redirect>
        return (
            
            <div className="form-body">
            <div className="row">
                <div className="img-holder">
                    <div className="bg"></div>
                    <div className="info-holder">
                        <img src="images/graphic1.svg" alt=""/>
                    </div>
                </div>
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                        <br/>
                            <h3>Get more things done with Cisca Planner.</h3>
                            <p>Access to the most powerfull tool in the entire design and web industry.</p>
                            <div className="page-links">
                                <b className="">Login</b>
                            </div>
                            <form  onSubmit={this.handleSubmit}>
                                <input type="email" name="email" id="email" onChange={this.handleChange} placeholder="E-mail Address" />
                                <input className="form-control" name="password" type="password" id="email" onChange={this.handleChange} placeholder="Password" />
                                <div className="form-button">
                                    <button id="submit" type="submit" className="ibtn">Login</button> <Link href="forget4.html">Forget password?</Link>
                                </div>
                                <div className="center red-text" >
                                    {authError ? <p>{authError} </p> : null}
                                </div>
                            </form>
                            <div className="other-links">
                                <span>Or login with</span><Link href="login4.html#">Facebook</Link><Link href="login4.html#">Google</Link><Link href="login4.html#">Linkedin</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
     return {
        signIn: (cred) => dispatch(signIn(cred)) 
     }

}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
