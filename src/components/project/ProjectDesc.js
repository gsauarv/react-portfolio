import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import sanityClient from "../../Client";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stringify } from "postcss";

function ProjectDesc() {
  const slug = useParams();
  const [loading, setLoading] = useState(false);
  const [projectDesc, setProjectDesc] = useState([]);
  useEffect(
    () =>
      sanityClient
        .fetch(
          `*[slug.current == "${slug.projectId}"]
            {
              title,
              languageUsed,
              description,
              projectDetails,
              codeInput{code}

            }`
        )
        .then((data) => {
          setProjectDesc(data[0]);
          console.log(projectDesc);
        }),

    []
  );

  return (
    <div className="container">
      <div className="articleContainer">
        <Link to="/projects" className="arrowLeft">
          <ArrowBackRoundedIcon />
        </Link>
        <h1>{projectDesc.title}</h1>
        <h3>{projectDesc.description}</h3>
        <h4>{projectDesc.languageUsed}</h4>
        <div className="blockContent">
          <BlockContent
            blocks={projectDesc.projectDetails}
            projectId="t6inkajs"
            dataset="production"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDesc;
