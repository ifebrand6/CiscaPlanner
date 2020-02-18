import React from "react";
import moment from 'moment';
//import { Link } from "react-router-dom";

const ProjectSummary = ({project}) => {
    return (
        <div > 
        <div className="card-list">
            <div className="card-list-head">
            <h6>{project.title}</h6>
            </div>
            <div className="card-list-body filter-list-1581100610158"><div className="card card-task">
                <div className="progress">
                <div className="progress-bar bg-danger" ></div>
                </div>
                <div className="card-body">
                <div className="card-title">
                   
                    <h6 data-filter-by="text" className="H6-filter-by-text">{project.content}</h6>
                    <span className="text-small text">{moment(project.createdAt.toDate()).calendar()}</span>
                  
                    
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