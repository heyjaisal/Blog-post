
const express = require('express');
const router = express.Router();
const Blog = require('../Model/Blog');


exports.CreateBlog =  async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.FetchList = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: 1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.FetchBlog =  async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

