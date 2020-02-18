import React, { Component } from 'react'
// import Form from './form'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
// import {getAProject} from '../../store/actions/projectActions'


 class UpdateProject extends Component {
    state = {
        ...this.props
    }
    
    componentDidMount(){
        let {id} = this.props.match.params
        this.props.getAProject(id)
        }
        
    render() {

        const {project} = this.props
        console.log({project})
        return (
        <div className="container"> 
            {this.state.project.id}
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null 
    return {
        project: project,
        auth: state.firebase.auth
}
}
export default compose(
    connect(mapStateToProps),firestoreConnect(UpdateProject))




//TODO
/*
first: we need to get the data from the store, but this time an indiviual data, to do this we match the url params with the state id
then we pass this as props in the component
and access is as an object.
finally we pass it to the individual field.
create a seperate fxn componen to pass in the props

**/