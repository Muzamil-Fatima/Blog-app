import { useParams } from "react-router-dom";
import initialBlogs from "../data/initialBlogs";
import { getBlogs } from "../utils/blogStorage";

function BlogDetails() {
  const { id } = useParams();

  const allBlogs = [...getBlogs(), ...initialBlogs];
  const blog = allBlogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Blog not found 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">

          {blog.image && (
            <img
              src={blog.image}
              alt=""
              className="w-full h-60 sm:h-80 object-cover rounded-2xl mb-6"
            />
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            {blog.title}
          </h1>

          <p className="text-slate-300 border-l-4 border-indigo-500 pl-4 mb-6">
            {blog.description}
          </p>

          <div className="border-t border-slate-700 my-6"></div>

          <div className="text-slate-200 leading-8 text-base sm:text-lg space-y-6">
            {blog.content}
          </div>

        </div>

      </div>
    </div>
  );
}

export default BlogDetails;