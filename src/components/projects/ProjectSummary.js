import React from "react";
// import { NavLink } from "react-router-dom";

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-o project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>{`Posted by the ${project.authorFirstname} ${project.authorFirstname}`}</p>
            <p className="text-grey">#rd September, 2am</p>
        </div>
    </div>
    )
}
export default ProjectSummary;