import React, { useEffect, useState } from "react";
import sanityClient from "../../Client";
import HashLoader from "react-spinners/HashLoader";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { IconButton } from "@material-ui/core";
function Article() {
  const [datas, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const slug = useParams();

  useEffect(() => {
    getSanityFetch();
  }, []);

  let getSanityFetch = async function () {
    try {
      const sanityData =
        await sanityClient.fetch(`*[slug.current == "${slug.blogId}"]

      {
        title,
        description,
        mainImage
        {
          asset -> {url}
      },
      body,
      author -> { name}
        
      
      }`);

      const dataSet = async () => {
        setData(sanityData[0]);
        setLoading(false);
      };

      await dataSet();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container">
        {loading ? (
          <div className="loader">
            <HashLoader color={"#259c5f"} loading={loading} size={30} />
            <br />
            <p>Loading</p>
          </div>
        ) : (
          <div className="articleContainer">
            <Link to="/blogs" className="arrowLeft">
              <ArrowBackRoundedIcon />
            </Link>
            <h1>{datas.title}</h1>
            <h3>{datas.description}</h3>
            <h4>{datas.author.name}</h4>
            <img src={datas.mainImage.asset.url}></img>
            <div className="blockContent">
              <BlockContent
                blocks={datas.body}
                projectId="t6inkajs"
                dataset="production"
              />
            </div>
            <p>{datas.code}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
