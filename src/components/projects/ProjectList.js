import React from "react";
// import { NavLink } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";


const ProjectList = ({projects}) => {
    
    const projectList =
        projects && projects.map(project =>{
         return (
             <Link to={'/project/' + project.id } key={project.id}>
            <ProjectSummary project={project}/>  
            </Link>
         )   
        })
    
  
    return (
        <div className="project-list section">
            
            {projectList}
        </div> 
    )
}
export default ProjectList;