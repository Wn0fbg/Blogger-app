import { useEffect, useState } from "react";
import BlogCard from "../components/Blogcard";
import { getBlogs } from "../api/Api";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      const allBlogs = await getBlogs();
      setBlogs(allBlogs.data);
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {blogs &&
          blogs.map((item, i) => {
            return <BlogCard key={i} blogdata={item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
