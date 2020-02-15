import React,{ Component } from "react";
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import {createProject} from '../../store/actions/projectActions'

class Dashboard extends Component{
   
    render(){
        const {projects, auth, notifications} = this.props;
        console.log(this.props)
        if(!auth.uid) return <Redirect to='/login'></Redirect>
        console.log('why the fuck are you not loading...')
     return (
        <div className="layout layout-nav-side">
            <div className="main-container">
              <div className="container">
              <ProjectList projects={projects} createProject={createProject}/> 
               </div>
                <button className="btn btn-primary btn-round btn-floating btn-lg collapsed" type="button" data-toggle="collapse" data-target="#floating-chat" aria-expanded="false">
                        <i className="material-icons">notifications_active</i>
                        <i className="material-icons">close</i>
                </button>
                  <Notifications notifications={notifications}/>
            </div>
        </div>
     );
    }
    
}
const mapStateToProps = (state) =>{
   console.log(state)   
    return {  
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    connect(mapStateToProps),firestoreConnect([
        {collection: 'projects',orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 3,orderBy: ['time', 'desc']}
    ])
    )
    (Dashboard)
    ;  