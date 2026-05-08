export const getBlogs = () => {
  const blogs = localStorage.getItem("blogs");
  return blogs ? JSON.parse(blogs) : [];
};

export const saveBlog = (blog) => {
  const blogs = getBlogs();
  const updatedBlogs = [blog, ...blogs];
  localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
};
