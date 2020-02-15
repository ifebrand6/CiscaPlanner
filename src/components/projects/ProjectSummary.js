import React from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const ProjectSummary = ({project}) => {
    return (
        <div > 
        <div className="card-list">
            <div className="card-list-head">
            <h6>{project.title}</h6>
            <div className="dropdown">
                <button className="btn-options" type="button" id="cardlist-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">more_vert</i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="nav-side-project.html#">edit</Link>
                <Link className="dropdown-item text-danger" to="nav-side-project.html#">Delete</Link>
                </div>
            </div>
            </div>
            <div className="card-list-body filter-list-1581100610158"><div className="card card-task">
                <div className="progress">
                <div className="progress-bar bg-danger" ></div>
                </div>
                <div className="card-body">
                <div className="card-title">
                    <Link to="nav-side-project.html#">
                    <h6 data-filter-by="text" className="H6-filter-by-text">project.</h6>
                    </Link>t
                    <span className="text-small">{moment(project.createdAt.toDate()).calendar()}</span>
                </div>
                </div>
            </div><div className="card card-task">
                <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" ></div>
                </div>
            </div><div className="card card-task">
                              
                        
            </div></div>
        </div>
                  
        </div>
    )
}
export default ProjectSummary;