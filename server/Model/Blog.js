const mongoose = require('mongoose')


const Blog = new mongoose.Schema({
    title:{type:String , required:true},
    author: {type:String , required:true},
    discription: {type:String , required:true},
    
})

module.exports = mongoose.model('Blog', Blog);
