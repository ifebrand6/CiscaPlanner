import React from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-o project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>{`Posted by the ${project.authorFirstname} ${project.authorLasttname}`}</p>
            <p className="text-grey">{moment(project.createdAt.toDate()).calendar()}</p>
            <Link className='secondary-content' to={`/update/${project.id}`}>
            <i className='material-icons edit'>edit</i>
            </Link>
        </div>
    </div>
    )
}
export default ProjectSummary;