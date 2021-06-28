import React, { useState, useEffect } from "react";
import ProjectCards from "./ProjectCards";
import sanityClient from "../../Client";
import HashLoader from "react-spinners/HashLoader";

function Projects() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      sanityClient
        .fetch(
          `*[_type == 'projects']
  {
    title,
    description,
	  languageUsed,
    slug  
   }`
        )
        .then((data) => {
          setData(data);
          setLoading(false);
        }),
    []
  );
  return (
    <div>
      <div className="container">
        <h4>Projects</h4>
        <p>Explore my handpicked projects.</p>
        {loading == true ? (
          <div className="loader">
            <HashLoader color={"#259c5f"} loading={loading} size={30} />
            <h4>Loading....</h4>
          </div>
        ) : (
          datas.map((data) => (
            <ProjectCards
              projectName={data.title}
              projectDesc={data.description}
              languageUsed={data.languageUsed}
              slug={data.slug.current}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Projects;
