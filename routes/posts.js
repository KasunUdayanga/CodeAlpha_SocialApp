// /routes/posts.js
const express = require('express');
const Post = require('../models/post');
const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
    try {
        const post = new Post({ content: req.body.content });
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
