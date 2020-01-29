import React from "react";
// import { NavLink } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
}
export default ProjectList;