const express = require("express");

const PostsController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extractFile, PostsController.createPost);

router.put("/:id", checkAuth, extractFile, PostsController.updatePost);

router.delete("/:id", checkAuth, PostsController.deletePost);

router.get("", PostsController.getPosts);

router.get("/:id", PostsController.getPost);

module.exports = router;
