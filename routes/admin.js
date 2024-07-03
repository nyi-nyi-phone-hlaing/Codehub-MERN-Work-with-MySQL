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

module.exports = router;
