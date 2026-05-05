import { useState } from "react";
import { getBlogbyid } from "../api/Api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState(null);
  const apiURL = "http://localhost:3000/";

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogbyid(id);
      setBlog(blogData.data[0]);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      {blog && (
        <div className="flex flex-col w-[60%] overflow-hidden">
          <h1 className="mt-1 text-4xl font-extrabold">{blog.title}</h1>

          <div className="flex mt-4 mb-4">
            <small>{blog.createdon}</small>
          </div>
          <img
            src={apiURL + blog.image}
            alt={blog.title}
            className="rounded-lg"
          />
          <div>
            <h2>{blog.post}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
