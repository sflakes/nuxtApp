// const express = require('express');
// const route = express.Router();
// sorthand of
const route = require('express').Router();
const Blog = require('../models/Blog');


route.post('/post', (req, res) => {
    // console.log(req)
    const { title, des } = req.body;

    if (!title||!des) {
        return res.status(400).json({ error: "All the field are required" });
    }

    const blogPost = Blog({
        title,
        des
    });

    Blog.create(blogPost)
        .then((resData) => {
            res.json({resData});
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

// route.get('/', (req,res)=> {
//     res.json({
//         message: "Welcome to express app"
//     })
// })

//delete data
route.delete('/delete/:id', (req,res)=>{
    let deleteQuery = {_id: req.params.id};

    Blog.findByIdAndDelete(deleteQuery)
    .then((deleteData)=> {
        res.json({massage: "Post deleted successfully "});
    }).catch((err)=>{
        console.log(err);
    });
});

//edit api
route.get('/edit/:id', (req,res)=>{
    let editQuery = {_id: req.params.id};
    Blog.findOne({})
    .then((editData)=>{
        res.json(editData);
    }).catch((err)=>{
        console.log(err);
    });
})


module.exports = route;