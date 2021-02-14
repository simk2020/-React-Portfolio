import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardHeading from "../CardHeading";
import ProjectCard from "../ProjectCard";
import "./style.css";

function Card() {
  return (
    <div>
      <ProjectCard />

      <CardBtn
        style={{ opacity: 1 }}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: 1 }}
        data-value="next"
      />
    </div>
  );
}

export default Card;
