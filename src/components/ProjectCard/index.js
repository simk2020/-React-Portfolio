import React from "react";

function ProjectCard (props){
    const project = props.project

    return (
     <div>
          <p>{project.title}</p>
          <p>{project.image}</p>

     </div>

    );
}
export default ProjectCard;