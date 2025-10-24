

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
   const [Error, SetError] = useState(null);
   const navigate = useNavigate();

  useEffect(()=>{
const token = localStorage.getItem("token")
if(token){
  console.log("validated");
  
}else{
  navigate("/")
  console.log("no token");
  
}
  },[])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/blog/fetch-blog/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => SetError(err));
  }, [id]);

  if (!blog) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Blogs</Link>

        {Error && <h1 className="text-gray-600 mb-4">{Error}</h1>}

      <h1 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-6">by {blog.author}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.discription}</p>
    </div>
  );
}

export default BlogDetail;