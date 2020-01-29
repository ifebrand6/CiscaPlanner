import React from "react";
// import { NavLink } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";


const ProjectList = ({projects}) => {
    const projectList =
        projects && projects.map(project =>{
         return (
            <ProjectSummary project={project} keys={project.id} />  
         )   
        })
    
    console.log(projectList)
    return (
        <div className="project-list section">
            
            {projectList}
        </div>
    )
}
export default ProjectList;