import { useNavigate } from "react-router-dom";

function BlogCard({ id, title, description }) {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-800 rounded-2xl p-5 sm:p-6 hover:scale-105 transition duration-300 shadow-lg w-full">

      <h2 className="text-xl sm:text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      <button
        onClick={() => navigate(`/blog/${id}`)}
        className="mt-5 bg-cyan-500 px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base"
      >
        Read More
      </button>

    </div>
  );
}

export default BlogCard;