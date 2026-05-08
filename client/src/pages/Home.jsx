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
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        <Hero />

        <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-8">
          Latest Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
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