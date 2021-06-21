import React from "react";
import { Link } from "react-router-dom";

import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";

function Blog(props) {
  return (
    <Link to={"/article/" + props.slug} key={props.slug} className="linkRed">
      <div className="blogContainer">
        <div
          className="blogimageContainer"
          style={{
            backgroundImage: `linear-gradient(#141e30, #243b5556),url(${props.img})`,
          }}
        />
        <div className="blogtitleContainer">
          <h1>{props.title}</h1>
          <p>{props.description}</p>

          <p>
            {new Date(props.publishedAt).getUTCFullYear() +
              ` - ` +
              new Date(props.publishedAt).getUTCMonth() +
              ` - ` +
              new Date(props.publishedAt).getUTCDate()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Blog;
