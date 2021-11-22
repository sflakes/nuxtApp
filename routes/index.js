// const express = require('express');
// const route = express.Router();
// sorthand of
const route = require('express').Router();
const Blog = require('../models/Blog');


route.post('/post', (req, res) => {
    // console.log(req)
    const { title, des, author } = req.body;

    if (!title || !des || ! author) {
        return res.status(400).json({ error: "All the field are required" });
    }

    const blogPost = Blog({
        title,
        des,
        author
    });

    Blog.create(blogPost)
        .then((resData) => {
            res.json({ resData });
        })
        .catch((err) => {
            console.log(err);
        });
});


//detail post api
route.get('/details/:id', (req, res) => {
    let detailsQuery = { _id: req.params.id };

    Blog.findOne(detailsQuery)
        .then((detailsdata) => {
            res.json(detailsdata);
        }).catch((err) => {
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
            console.log(err);
        });
});

// route.get('/', (req,res)=> {
//     res.json({
//         message: "Welcome to express app"
//     })
// })

//delete data
route.delete('/delete/:id', (req, res) => {
    let deleteQuery = { _id: req.params.id };

    Blog.findByIdAndDelete(deleteQuery)
        .then((deleteData) => {
            res.json({ massage: "Post deleted successfully " });
        }).catch((err) => {
            console.log(err);
        });
});

//edit api
route.get('/edit/:id', (req, res) => {
    let editQuery = { _id: req.params.id };
    Blog.findOne(editQuery)
        .then((editData) => {
            res.json(editData);
        }).catch((err) => {
            console.log(err);
        });
});




//update edit data api

route.put('/update/:id', (req, res) => {
    let updateQuery = { _id: req.params.id };

    Blog.updateOne(updateQuery, {
        $set: {
            title: req.body.title,
            des: req.body.des,
            author: req.body.author
        },
    }).then((updatedata) => {
        res.json(updatedata);
    }).catch((err) => {
        console.log(err);
    });
});

//latest post api
route.get('/latestpost', (req,res)=> {
    Blog.find({})
    .sort({date: "DESC"})
    .limit(5)
    .then((latestpost)=>{
        res.json(latestpost);
    }).catch((err)=>{
        console.log(err);
    });
});


module.exports = route;