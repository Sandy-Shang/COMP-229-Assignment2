let express = require('express');
<<<<<<< HEAD
<<<<<<< HEAD
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Book = require('../models/book');
=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
let router = express.router;
let mongoose = require('mongoose');

// create a reference to the db model
let Book = require('../models/books');
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
<<<<<<< HEAD
<<<<<<< HEAD
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', {title: 'Books', BookList: bookList});      
=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
            return console.error(err);    
        }
        else
        {
        res.render('book/list', 
        {title: 'Books', 
        BookList: bookList, 
        displayName: req.user ? req.user.displayName : ''});
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
    res.render('book/add', {title: 'Add Book'})          
=======
    res.render('book/add', 
    {title: 'Add Book',
    displayName: req.user ? req.user.displayName : ''})
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
    res.render('book/add', 
    {title: 'Add Book',
    displayName: req.user ? req.user.displayName : ''})
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

<<<<<<< HEAD
<<<<<<< HEAD
    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });

=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
    Book.create(newBook, (err, book) => {
        if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                res.redirect('/book-list');
            }
    });
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
<<<<<<< HEAD
<<<<<<< HEAD
        if(err)
        {
=======
        if(err){
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
        if(err){
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
<<<<<<< HEAD
<<<<<<< HEAD
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
            res.render('book/edit', 
            {title: 'Edit Book', 
            book: bookToEdit,
            displayName: req.user ? req.user.displayName : ''});
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
<<<<<<< HEAD
<<<<<<< HEAD
        "_id": id,
=======
        "_id" : id,
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
        "_id" : id,
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
<<<<<<< HEAD
<<<<<<< HEAD
            res.end(err);
        }
        else
        {
            // refresh the book list
=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
            res.render(err);
        }
        else
        {
            //refresh the book-list
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
            res.redirect('/book-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
<<<<<<< HEAD
<<<<<<< HEAD
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/book-list');
=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
            res.render(err);
        }
        else
        {
            //refresh the book-list
            res.redirect('/book-list');
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        }
    });
}