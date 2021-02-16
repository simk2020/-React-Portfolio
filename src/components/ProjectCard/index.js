import React from "react";

function ProjectCard (props){
    //const project = props.project

    return (

        <div className="card" style={{width: '50%'}}>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">{props.github}</a>
        </div>
      </div>



    );
}
export default ProjectCard;