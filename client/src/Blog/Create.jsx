import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogCreate() {
  const [title, setTitle] = useState('');
  const [discription, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('No token found. Redirecting to login...');
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not authorized to create a blog.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:8000/api/blog/create',
        { title, discription, author },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/blogs'); 
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Error creating blog.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Create Blog
      </h1>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Author"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border px-4 py-2 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={discription}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default BlogCreate;
