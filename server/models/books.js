let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
<<<<<<< HEAD
<<<<<<< HEAD
    description: String,
    price: Number
=======

>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======

>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);