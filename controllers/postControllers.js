const Post = require("../models/Post");

/*
tässä get
*/
exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*
tässä get
*/
exports.getPostById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id);
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*
tässä post
*/
exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*
tässä put
*/
exports.updatePost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let postId = Number(req.params.id);

    let post = Post.updateById(postId, title, body);
    res.status(201).json({ message: "Post updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*
tässä delete
*/
exports.deletePost = async (req, res, next) => {
  try {
    let delId = Number(req.params.id);
    await Post.delete(delId);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
