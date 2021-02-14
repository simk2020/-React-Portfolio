import React from "react";

function ProjectCard (props){
    const project = props.project

    return (
     <div>
          <p>{project.title}</p>
          {/* <p>{project.image}</p> */}
          <p>{project.description}</p>
          <p>{project.Github}</p>
        
     </div>

    );
}
export default ProjectCard;