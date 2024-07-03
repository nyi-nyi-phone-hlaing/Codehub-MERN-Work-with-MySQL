//? Post Array
const Post = require("../models/post");

//? Homepage Rendring
exports.renderHomePage = (req, res) => {
  Post.findAll()
    .then((rows) => {
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
  Post.create({ title, description, image_url: photo })
    .then((_) => {
      console.log("Post Create Successfully!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderPostDetailPage = (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((row) => {
      res.render("details", { title: row.title, post: row });
    })
    .catch((err) => console.log(err));
};
