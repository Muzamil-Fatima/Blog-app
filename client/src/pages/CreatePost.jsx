import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveBlog } from "../utils/blogStorage";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [image, setImage] = useState("");

  const handlePublish = () => {
    if (!title || !description || !content) {
      alert("Please fill all required fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description,
      content,
      category,
      image: image || "https://source.unsplash.com/800x400/?blog,technology",
    };

    saveBlog(newBlog);

    alert("Blog Published Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-4 py-10">

      <div className="bg-slate-900/70 border border-slate-700 w-full max-w-3xl p-6 sm:p-10 rounded-3xl shadow-2xl">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          ✍️ Create New Blog
        </h1>

        <input
          className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Technology</option>
          <option>AI</option>
          <option>Web Development</option>
          <option>Design</option>
          <option>Programming</option>
        </select>

        <input
          className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          rows="8"
          className="w-full p-3 rounded-lg bg-slate-800 mb-6 outline-none"
          placeholder="Write your full blog..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handlePublish}
          className="w-full bg-linear-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Publish Blog
        </button>

      </div>

    </div>
  );
}

export default CreatePost;