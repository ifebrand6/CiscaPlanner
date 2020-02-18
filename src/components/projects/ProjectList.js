import React,{Component} from "react";
import {connect} from 'react-redux'
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import {createProject} from '../../store/actions/projectActions'



class ProjectList extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.createProject(this.state)
        this.setState({ showModal: false });
            // console.log(this.state )
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    // console.log(e)
    }
    render(){
        const {projects} = this.props   
        const projectList =
            projects && projects.map(project =>{
            return (
                <Link to={'/project/' + project.id} key={project.id}>
                <ProjectSummary project={project}/>  
                </Link>
            )   
            })
    
  
        return (
            <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
                <div className="page-header">
                <h1>Project List</h1>
                <p className="lead">Easy Manage your team projects</p>
                <div className="d-flex align-items-center">
                    <ul className="avatars">
                    <li>
                        <Link to="nav-side-project.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="David Whittaker">
                        <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg"/>
                        </Link>
                    </li>
                    </ul>
                </div>
                <div>
                    <div className="d-flex justify-content-between text-small">
                    <div className="d-flex align-items-center">
                        <i className="material-icons">playlist_add_check</i>
                        <span>3/12</span>
                    </div>
                    <span>Due 9 days</span>
                    </div>
                </div>
                </div>
                <div className="tab-content">
                <div className="tab-pane fade show active" id="tasks" role="tabpanel" data-filter-list="card-list-body">
                    <div className="row content-list-head">
                    <div className="col-auto">
                        <h3>Projects</h3>
                        <button className="btn btn-round" data-toggle="modal" data-target="#task-add-modal">
                        <i className="material-icons">add</i>
                        </button>
                    </div>
                    </div>
                        {projectList}
                </div>
                </div>
                <form className="modal fade" id="task-add-modal" tabindex="-1" aria-hidden="true" onSubmit={this.handleSubmit}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Project</h5>
                        <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">close</i>
                        </button>
                    </div>
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                        <li className="nav-item">
                        <Link className="nav-link" id="task-add-details-tab" data-toggle="tab" to="nav-side-project.html#task-add-details" role="tab" aria-controls="task-add-details" aria-selected="false">Details</Link>
                        </li>
                    </ul>
                    <div className="modal-body">
                        <div className="tab-content">
                        <div className="tab-pane fade show active" id="task-add-details" role="tabpanel">
                            <h6>Project Details</h6>
                            <div className="form-group row align-items-center">
                            <label className="col-3">Name</label>
                            <input className="form-control col" type="text" placeholder="Project name" id="title" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group row">
                            <label className="col-3">Description</label>
                            <textarea className="form-control col" rows="3" placeholder="Project description" id="content" onChange={this.handleChange}></textarea>
                            </div>
                            <hr/>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button  className="btn btn-outline-dark">
                        Create Project
                        </button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        )
    }
  
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToProps)(ProjectList);