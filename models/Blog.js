const mongoose = require('mongoose');

let blogSchema = mongoose.Schema({ //var replaced with let
    
    title:{
        type:  String
    },
    des: {
        type: String
    },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model("Blogpost", blogSchema); 