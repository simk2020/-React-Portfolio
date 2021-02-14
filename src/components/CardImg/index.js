
  import React from "react";
  import projects from "../Data/projects.json";
  import ProjectCard from "../components/ProjectCard";
  
  function RenderSmoothImage({src, alt}) {
    const [imageLoaded, setImageLoaded]=React.useState(false);

    return (
      <div className="smooth-image-wrapper">
        <img
          src={src}
          alt={alt}
          className={`smooth-image image-${
            imageLoaded ? 'visible' :  'hidden'
          }`}
          onLoad={()=> setImageLoaded(true)}}
        />
        {!imageLoaded && (
          <div className="smooth-preloader">
            <span className="loader" />
          </div>
        )}
      </div>
    )
  }