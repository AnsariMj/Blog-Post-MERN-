// const Blog = require("../models/blog");
const asyncHandler = require("express-async-handler");

//  Add New Blog
const addBlog = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Update a Blog
const updateBlog = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// GetALl the Blog
const getAllBlog = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Get the Single Blog
const getSingleBlog = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Delete a Single Blog
const deleteBlog = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

//Search the Blog

const searchBlog = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = {
    addBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    searchBlog,
}
