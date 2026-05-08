import BlogCard from "../components/BlogCard";
import { useState } from "react";
import { getBlogs } from "../utils/blogStorage";
import initialBlogs from "../data/initialBlogs";

function Blogs() {
  const [search, setSearch] = useState("");
  const [blogs] = useState([...getBlogs(), ...initialBlogs]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">

      <div className="px-4 sm:px-6 md:px-10 py-10">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold">
            All Blogs
          </h1>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-80 md:w-96 px-4 py-3 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
          />

        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
              />
            ))
          ) : (
            <p className="text-slate-400 col-span-full text-center">
              No blogs found 😔
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Blogs;