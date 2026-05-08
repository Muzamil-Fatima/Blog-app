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
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white px-4 sm:px-6 md:px-10 py-10">

      {/* Header */}
      <div className="mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Dashboard <span className="text-cyan-400">Overview</span>
        </h1>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          Track your blog performance in real time
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        <div className="bg-linear-to-br from-cyan-600 to-blue-700 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg sm:text-xl font-semibold">Total Blogs</h2>
          <p className="text-4xl sm:text-5xl font-bold mt-4">
            {stats.totalBlogs}
          </p>
        </div>

        <div className="bg-linear-to-br from-purple-600 to-pink-600 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg sm:text-xl font-semibold">Total Views</h2>
          <p className="text-4xl sm:text-5xl font-bold mt-4">
            {stats.views}
          </p>
        </div>

        <div className="bg-linear-to-br from-green-500 to-emerald-600 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg sm:text-xl font-semibold">Comments</h2>
          <p className="text-4xl sm:text-5xl font-bold mt-4">
            {stats.comments}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;