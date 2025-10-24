const express = require('express');
const cors = require('cors');
const AuthRoutes = require('./Routes/auth');
const BlogRoutes = require("./Routes/Blog");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json());

const mongoURL = process.env.MONGO_URI;
console.log("Mongo URL:", mongoURL);

mongoose.connect(mongoURL)
  .then(() => console.log(' MongoDB Connected'))
  .catch(err => console.log(' MongoDB Error:', err));

const PORT = 8000;

app.use('/api/auth', AuthRoutes);
app.use('/api/blog', BlogRoutes);

app.listen(PORT, () => {
  console.log(` Server on PORT ${PORT}`);
});
