// const express = require('express');
// const route = express.Router();
// sorthand of
const route = require('express').Router();
const Blog = require('../models/Blog');


route.post('/post', (req, res) => {
    const { title, des } = req.body;

    if (!title || !des) {
        return res.status(400).json({ error: "All the field are required" });
    }

    const blogPost = Blog({
        title,
        des
    });

    Blog.create(blogPost)
        .then((resData) => {
            res.json({ PostResult: resData, message: "Post created Successfully" });
        })
        .catch((err) => {
            console.log(err);
        });
});


//get all data
route.get('/get', (req, res) => {
    Blog.find({})
        .sort({ data: "DESC" })
        .then((resultData) => {
            res.json(resultData);
        })
        .catch((err) => {
            console.log(err)
        });
});

// route.delete();


module.exports = route;