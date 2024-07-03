//? Post Array
const Post = require("../models/post");

//? Homepage Rendring
exports.renderHomePage = (req, res) => {
  Post.find()
    .then(([rows]) => {
      res.render("home", { title: "Home Page", postsArray: rows });
    })
    .catch((err) => console.log(err));
};

//? PostPage Rendring
exports.renderPostPage = (req, res) => {
  res.render("post", { title: "Post Page" });
};

//? AddPost Page Rendring
exports.renderAddPostPage = (req, res) => {
  res.render("create-post", { title: "Post Create" });
};

//? Create post controller
exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  const post = new Post(title, description, photo);
  post
    .create()
    .then((_) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderPostDetailPage = (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then(([[row]]) => {
      res.render("details", { title: row.title, post: row });
    })
    .catch((err) => console.log(err));
};
