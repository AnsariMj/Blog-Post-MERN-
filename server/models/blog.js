const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const blogSchema = new Schema({



});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;