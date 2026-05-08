import { useMemo } from "react";
import { getBlogs } from "../utils/blogStorage";

function Dashboard() {
  const stats = useMemo(() => {
    const blogs = getBlogs();

    return {
      totalBlogs: blogs.length,
      views: blogs.length * 342 + 1200,
      comments: blogs.length * 18 + 50,
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        <h1 className="text-3xl sm:text-5xl font-bold mb-2">
          Dashboard <span className="text-cyan-400">Overview</span>
        </h1>

        <p className="text-slate-400 mb-10">
          Track your blog performance
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-linear-to-br from-cyan-600 to-blue-700 p-6 rounded-2xl">
            <h2>Total Blogs</h2>
            <p className="text-4xl font-bold mt-2">{stats.totalBlogs}</p>
          </div>

          <div className="bg-linear-to-br from-purple-600 to-pink-600 p-6 rounded-2xl">
            <h2>Views</h2>
            <p className="text-4xl font-bold mt-2">{stats.views}</p>
          </div>

          <div className="bg-linear-to-br from-green-500 to-emerald-600 p-6 rounded-2xl">
            <h2>Comments</h2>
            <p className="text-4xl font-bold mt-2">{stats.comments}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;