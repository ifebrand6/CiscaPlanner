import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.signup(this.state)
       // console.log(this.state )
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
       // console.log(e)
    }
    render() {
        const {auth,authStatus} = this.props
        if (auth.uid) {
            return <Redirect to='/'></Redirect>
        }
        console.log(authStatus)
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
                                <b className="">Register</b>
                            </div>
                            <form  onSubmit={this.handleSubmit}>
                                <input type="text" id="firstName" onChange={this.handleChange} placeholder="First Name" />
                                <input type="text" id="lastName" onChange={this.handleChange} placeholder="Last Name" />
                                <input type="email" id="email" onChange={this.handleChange} placeholder="E-mail Address" />
                                <input className="form-control" type="password" name="password" placeholder="Password" />
                                <div className="form-button">
                                    <button  type="submit" className="btn btn-outline-dark">Sign up</button> <a href="forget4.html">Forget password?</a>
                                </div>
                                <div className="center red-text" >
                                    {authStatus ? <p>{authStatus} </p> : null}
                                </div>
                            </form>
                            <div className="other-links">
                                <span>Or login with</span><a href="login4.html#">Facebook</a><a href="login4.html#">Google</a><a href="login4.html#">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        authStatus: state.auth.authStatus,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signup: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
