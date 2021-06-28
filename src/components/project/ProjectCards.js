import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProjectCards(props) {
  return (
    <Link to={"/projectDesc/" + props.slug} key={props.slug} className="link">
      <div className="projectContainer">
        <div className="projectCards">
          <h6>{props.projectName}</h6>
          <p>{props.projectDesc}</p>
          <span>{props.languageUsed}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCards;
