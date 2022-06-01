const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')


//Create Post 

router.post("/", async (req, res) => {
    const newPost = new Post(req.body)

    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (err) {
        res.status(500).json(err)
    }
})


//Update Post

router.put("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, {
                    new: true
                })
                res.status(200).json(updatePost)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You are not allowed")
        }
    } catch (err) {
        res.status(500).json(err)
    }

})

//Delete Post 

router.delete("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("Deleted Post Successfully")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You are not allowed")
        }
    } catch (err) {
        res.status(500).json(err)
    }

})


//Get Post

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})


//Get All Posts

router.get("/", async (req, res) => {
    const username = req.query.user
    const category = req.query.category
    try {
        let posts;
        if (username) {
            posts = await Post.find({
                username: username
            })
        } else if (category) {
            posts = await Post.find({
                categories: {
                $in : [category]
            }})
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router