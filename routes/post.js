// Package Installer
const express = require("express");

// Import local
const postControllers = require("../controllers/post");

// Initializing
const router = express.Router();

//? Get -> Home Page
router.get("/", postControllers.renderHomePage);

//? Get -> Post Page
router.get("/posts", postControllers.renderPostPage);

//? Get -> Post Detail Page
router.get("/details/:id", postControllers.renderPostDetailPage);

module.exports = router;
