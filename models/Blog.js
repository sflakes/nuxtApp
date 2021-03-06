const mongoose = require('mongoose');

let blogSchema = mongoose.Schema({ //var replaced with let

    title: {
        type: String
    },
    des: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    }
});

module.exports = mongoose.model("Blogpost", blogSchema);