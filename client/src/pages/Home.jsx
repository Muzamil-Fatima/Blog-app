import { useState } from "react";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../utils/blogStorage";
import initialBlogs from "../data/initialBlogs";

function Home() {
  const [blogs] = useState(() => {
    const savedBlogs = getBlogs();

    return [...savedBlogs, ...initialBlogs];
  });

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />

      <div className="px-4 sm:px-6 md:px-10 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
          Latest Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
