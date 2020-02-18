import React from 'react';
import {connect} from 'react-redux'
import {updateProfile} from '../../store/actions/authActions'
import {Link} from 'react-router-dom'



const Profile = () => {
    return (
        <div className="form-body">
        <div className="website-logo">
            <Link to="http://brandio.io/envato/iofrm/html/index.html">
                <div className="logo">
                
                </div>
            </Link>
        </div>
        <div className="row">
            <div className="img-holder">
                <div className="bg"></div>
                <div className="info-holder">
                    <h3>Get more things done with Cisca Planner.</h3>
                    <p>Access to the most powerfull tool in the entire design and web industry.<br/><br/>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                </div>
            </div>
            <div className="form-holder">
                <div className="form-content form-sm">
                    <div className="form-items">
                        <h3 className="form-title">Update Profile</h3>
                        <form>
                            <div className="form-group">
                                <label>Personal Information</label>
                                <input type="text" className="form-control" name="name" placeholder="First Name" required=""/>
<input type="text" className="form-control" name="name" placeholder="Last Name" required="" />
                                <input type="email" className="form-control" name="email" placeholder="E-mail Address" required="" />
                            </div>
<label>Upload profile picture</label>
<input type="file" accept="image/*" className="form-control" name="name" placeholder="Upload profile picture" required=""/>
                            <div className="form-group">
                                <label>Role</label>
                                <div className="custom-options">
                                    <input type="radio" id="rad1" name="rad"/><label for="rad1">Manager</label>
                                    <input type="radio" id="rad2" name="rad"/><label for="rad2">Supervisor</label>
                                    <input type="radio" id="rad3" name="rad"/><label for="rad3">Senior Engineer</label>
                                    <input type="radio" id="rad4" name="rad"/><label for="rad4">Other</label>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Certifications"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Tell us about you in short</label>
                                <textarea className="form-control" spellcheck="false"></textarea>
                            </div>
                            <div className="form-button text-right">
                                    <button type="button" className="btn btn-light">Cancel</button><button id="submit" type="submit" className="ibtn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    )
             
    
}
const mapStateToPropsToState = (state) => {
    return{
        profile: state.firebase.auth.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => dispatch(updateProfile(profile))
    }
}
export default connect(mapStateToPropsToState,mapDispatchToProps)(Profile);