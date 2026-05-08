import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveBlog } from "../utils/blogStorage";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description: content,
    };

    saveBlog(newBlog);

    alert("Blog Published Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">

      <div className="bg-slate-800 w-full max-w-2xl p-6 sm:p-10 rounded-2xl">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">
          Create Blog
        </h1>

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 sm:p-4 rounded-lg bg-slate-700 mb-5 text-sm sm:text-base"
        />

        <textarea
          rows="8"
          placeholder="Write your blog here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 sm:p-4 rounded-lg bg-slate-700 mb-5 text-sm sm:text-base"
        />

        <button
          onClick={handlePublish}
          className="w-full sm:w-auto bg-cyan-500 px-6 sm:px-8 py-3 rounded-lg font-semibold"
        >
          Publish Blog
        </button>

      </div>

    </div>
  );
}

export default CreatePost;