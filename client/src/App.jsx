import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
