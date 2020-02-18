import React,{Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
//import {Link} from 'react-router-dom'
import {deleteProject} from '../../store/actions/projectActions'

class ProjectDetail extends Component {
    // handleClick = (e, id, deleteProject) => { // passing deleteProject function from prop
    //     e.preventDefault()
    //     deleteProject(id)
    //     console.log(id)
    // }
  
      render(){
        const {project, auth, deleteProjectData} = this.props;
        //console.log('this is props'+ this.props.project.id)
        console.log('this' + this.state)
         if(!auth.uid) return <Redirect to='/login'></Redirect>    
        if(project){
            return (
                <div className="layout layout-nav-side">
                <div className="main-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11 col-xl-10">
                            <div className="page-header">
                                <h1>Project Detail</h1>
                                <p className="lead"></p>
                                    <div className="d-flex align-items-center">
                    
                                    </div>
                                <div>
                            </div>
                            </div>
                                <div className="tab-content">
                                <div className="tab-pane fade show active" id="task" role="tabpanel">
                                    <div className="content-list" data-filter-list="content-list-body">
                                    <div className="row content-list-head">
                                        <div className="col-auto">
                                        <h3>Project</h3>
                                        </div>
                                    </div>
                                <div className="content-list-body filter-list-1581108412618"><div className="card card-note">
                                    <div className="card-header">
                                        <div className="media align-items-center">
                                        <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar filter-by-alt" data-toggle="tooltip" data-title="Peggy Brown" data-filter-by="alt" data-original-title="" title=""/>
                                        <div className="media-body">
                                            <h6 className="mb-0 H6-filter-by-text" data-filter-by="text">{project.title} {project.content}</h6>
                                        </div>
                                        </div>
                                    
                                        <div className="d-flex align-items-center">
                                        <span data-filter-by="text" className="SPAN-filter-by-text">Just now</span>
                                        <div className="ml-1 dropdown card-options">
                                            <button className="btn-options" type="button" id="note-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="material-icons">more_vert</i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right" x-placement="top-end">
                                            <button className="dropdown-item text-action btn-link" data-toggle="modal" data-target="#note-add-modal">
                                                Edit
                                            </button>
                                            <button className="dropdown-item text-danger btn-link" data-toggle="modal" data-target="#note-delete-modal">
                                                Delete
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card-body DIV-filter-by-text" data-filter-by="text">
                                        <p>{project.content}</p>
                                        <p>Posted By The {project.authorFirstname} {project.authorLasttname}<br/>{moment(project.createdAt.toDate()).calendar()}</p>
                                    </div>
                                    </div></div>
                                </div>
                            </div>
    
                            </div>
                        <form className="modal fade" id="note-add-modal" tabindex="-1"  aria-hidden="true">
                            <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Project</h5>
                                    <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                                    <i className="material-icons">close</i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group row align-items-center">
                                    <label className="col-3">Title</label>
                                    <input className="form-control col" type="text" placeholder="Note title" name="note-name"/>
                                    </div>
                                    <div className="form-group row">
                                    <label className="col-3">Text</label>
                                    <textarea className="form-control col" rows="6" placeholder="Body text for note" name="note-description" spellcheck="false"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button  className="btn btn-outline-dark" type="submit">
                                    Update Project record
                                    </button>
                                </div>
                                </div>
                            </div>
                        </form>
                        <form className="modal fade" id="note-delete-modal" tabindex="-1"  aria-hidden="true">
                            <div className="modal-dialog modal-confirm">
                                <div className="modal-content">
                                <div className="modal-body">
                                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                                    <button className="btn btn-outline-danger" onClick={e=>deleteProjectData(e, this.id)}>Delete</button>
                                </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            )
        } else{
            return (
                <div className="container center">
                <p>Loading project...</p>
                </div>
            )
        }  
    }  
   
}
const mapStateToProps = (state, ownProps) => {
    console.log(state.project.projects)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null 
     return {
        project: project,
        auth: state.firebase.auth
}
}
// const mapDispatchToprops = (dispatch, ownProps) => {
//     const id = ownProps.match.params.id;
//     //const projects = state.project.projects;
//     const projects = state.firestore.data.projects;
//     const project = projects ? projects[id] : null
//         return {

//         }
// }
 const mapDispatchToProps = (dispatch) => {
     return {
         deleteProjectData: (e, id) => {
            console.log(id)
             e.preventDefault()
             dispatch(deleteProject)
             console.log("project deleted successfull")
            //  e.history.push('/');
         }
     }
 }



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'projects'
        }
    ])
)
(ProjectDetail)

