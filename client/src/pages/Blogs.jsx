import BlogCard from "../components/BlogCard";
import { useState } from "react";
import { getBlogs } from "../utils/blogStorage";
import initialBlogs from "../data/initialBlogs";

function Blogs() {
  const [search, setSearch] = useState("");
  const [blogs] = useState([...getBlogs(), ...initialBlogs]);

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">All Blogs</h1>

          <input
            className="w-full md:w-96 p-3 rounded-xl bg-slate-800 outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                description={blog.description}
              />
            ))
          ) : (
            <p className="text-slate-400 text-center col-span-full">
              No blogs found 😔
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Blogs;