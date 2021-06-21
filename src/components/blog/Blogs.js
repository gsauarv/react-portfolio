import React, { useState, useEffect } from "react";
import sanityClient from "../../Client";
import Blog from "./Blog";
import HashLoader from "react-spinners/HashLoader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counts, setCount] = useState(0);
  useEffect(
    () =>
      sanityClient
        .fetch(
          `*[_type == 'post']
          {
            "authorImg" : author-> image.asset -> url,
            publishedAt,
            title,
            code,
            slug,
            description,
            mainImage
            {
              asset->
              {
                _id,
                url 
            }
          
          
                   
          }}`
        )
        .then((data) => {
          setBlogs(data);
          setLoading(false);
        })
        .catch(console.error),
    []
  );
  return (
    <div className="container">
      <div className="blogWrapper">
        <p>Latest Blogs</p>
        {loading ? (
          <div className="loader">
            <HashLoader color={"#259c5f"} loading={loading} size={30} />
            <h4>Loading....</h4>
          </div>
        ) : (
          (`setCount(counts+1)`,
          blogs.map((blog, counts) => (
            <Blog
              img={blog.mainImage.asset.url}
              title={blog.title}
              slug={blog.slug.current}
              count={counts}
              description={blog.description}
              publishedAt={blog.publishedAt}
            />
          )))
        )}
      </div>
    </div>
  );
};

export default Blogs;
