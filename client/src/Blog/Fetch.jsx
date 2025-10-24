import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
   const navigate = useNavigate();

  useEffect(()=>{
const token = localStorage.getItem("token")
if(token){
  navigate("/blogs")
}else{
  navigate("/")
  console.log("no token");
  
}
  },[])

  useEffect(() => {
    axios.get('http://localhost:8000/api/blog/fetch-list')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
        <Link 
          to="/create" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Create New
        </Link>

        
      </div>
      <div className="grid gap-4">
        {blogs.map(blog => (
          <Link key={blog._id} to={`/blogs/${blog._id}`} className="block p-4 border rounded shadow hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
            <p className="text-gray-500 text-sm mt-1">by {blog.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogList;