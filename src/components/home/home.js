import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

const Home = (props) => {
    const {auth} = props;
    if(auth.uid) return <Redirect to='/dashboard'></Redirect>
    return (
        <div className="form-body">
                    <div className="row">
                        <div className="img-holder">
                            <div className="bg"></div>
                                <div className="info-holder">
                                    <img src="img/magic.gif" alt=""/>
                                </div>
                        </div>
                        <div className="form-holder">
                            <div className="form-content">
                            <div className="form-items">
                                <br/>
                                    <h1>Get more things done with Cisca Planner.</h1>
                                    <p>
                                    Access to the most powerfull tool in the entire design and web industry.
                                    </p>
                                        <form>
                                            <br/>
                                                <div className="form-group mx-sm-3 mb-2">
                                                    <input type="email" placeholder="example@gmail.com" className="form-contrl"/>
                                                    <button className="btn-getStarted">
                                                    <Link className="inherit" to={'/signup'}>Get Started</Link></button>
                                                        <br/>
                                                        <div className="other-links"><span>Or login with</span>
                                                            <Link to="#">Facebook</Link><Link to="#">Google</Link><Link to="#">Linklebnd</Link>
                                                        </div>
                                                
                                                </div>
                                        </form>
                                </div>
                            </div>
                        </div>
                       
                        </div>
                    </div>
                
         
        
        
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home);