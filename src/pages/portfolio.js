import React from "react";
import projects from "../Data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Portfolio (){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
             <h1>Portfolio</h1>

            {
              projects.map(project => (
                <ProjectCard 
                    project={project}
                    
                />
              )) 
            }

          </div>
        </div> 
      </div>

    );
}
export default Portfolio;