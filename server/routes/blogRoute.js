const express = require('express');
const router = express.Router();
const {
    addBlog,
    updateBlog,
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    searchBlog,
} = require("../controller/blogController")
router.get("./addBlog", addBlog)
router.put("./updateBlog", updateBlog)
router.get("./getAllBlog", getAllBlog)
router.get("./getSingleBlog", getSingleBlog)
router.delete("./deleteBlog", deleteBlog)
router.get("./searchBlog", searchBlog)

module.exports = router;