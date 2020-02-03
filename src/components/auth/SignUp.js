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
        const {auth,authError} = this.props
        if (auth.uid) {
            return <Redirect to='/'></Redirect>
        }
        console.log(authError)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="center red-text" >
                        {authError ? <p>{authError} </p> : null}
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
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
