const express = require("express");


const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

const PostContoller = require("../controllers/posts");



//for creating a new post
router.post(
  // "" for looking for a path
  "",checkAuth, extractFile,
  // multer created to extract any file for inconming request
  PostContoller.createPost
);

//Update post or editing post
router.put("/:id",checkAuth, extractFile, PostContoller.updatePost);

//for all post
router.get("", PostContoller.getPosts);

//for single post
router.get("/:id", PostContoller.getPost );

// for deleting post
router.delete("/:id",checkAuth, PostContoller.deletePost);

module.exports = router;
