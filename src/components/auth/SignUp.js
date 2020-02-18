import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
import {Link} from 'react-router-dom'
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
        const {authError,auth} = this.props
        if (auth.uid) {
            return <Redirect to='/'></Redirect>
        }
        console.log(authError)
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
                                <input type="password" id="password" onChange={this.handleChange} placeholder="Password"  />
                                <div className="form-button">
                                    <button className="btn btn-outline-dark">Sign up</button> <Link href="#">Forget password?</Link>
                                </div>
                                <div className="center red-text" >
                                    {authError ? <p>{authError} </p> : null}
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
        authError: state.auth.authError,   
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signup: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
