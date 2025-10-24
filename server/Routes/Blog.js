const express = require('express');
const { FetchBlog, CreateBlog, FetchList } = require('../controllers/blog');

const Middleware = require('../Middleware/auth');

 const router = express.Router();

router.post('/create',Middleware, CreateBlog);
router.get('/fetch-list', FetchList)
router.get('/fetch-blog/:id', FetchBlog)


module.exports = router ;