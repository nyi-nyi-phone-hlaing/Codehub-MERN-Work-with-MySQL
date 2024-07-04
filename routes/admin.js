// Package Installer
const express = require("express");

// Import local
const postControllers = require("../controllers/post");

// Initializing
const router = express.Router();

//? Get -> Add Post Page
router.get("/create", postControllers.renderAddPostPage);

//? Post -> Create a new post
router.post("/create", postControllers.createPost);

//? Delete -> Delete post by id
router.post("/delete/:id", postControllers.deletePost);

//? Get -> Edit Post Page
router.get("/edit/:id", postControllers.renderEditPage);

//? Post -> Edit post by id
router.post("/edit-post", postControllers.editPost);

module.exports = router;
