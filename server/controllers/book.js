let express = require('express');
<<<<<<< HEAD
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Book = require('../models/book');
=======
let router = express.router;
let mongoose = require('mongoose');

// create a reference to the db model
let Book = require('../models/books');
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
<<<<<<< HEAD
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', {title: 'Books', BookList: bookList});      
=======
            return console.error(err);    
        }
        else
        {
        res.render('book/list', 
        {title: 'Books', 
        BookList: bookList, 
        displayName: req.user ? req.user.displayName : ''});
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
<<<<<<< HEAD
    res.render('book/add', {title: 'Add Book'})          
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
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
<<<<<<< HEAD
        if(err)
        {
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
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
=======
            res.render('book/edit', 
            {title: 'Edit Book', 
            book: bookToEdit,
            displayName: req.user ? req.user.displayName : ''});
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
<<<<<<< HEAD
        "_id": id,
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
            res.end(err);
        }
        else
        {
            // refresh the book list
=======
            res.render(err);
        }
        else
        {
            //refresh the book-list
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
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/book-list');
=======
            res.render(err);
        }
        else
        {
            //refresh the book-list
            res.redirect('/book-list');
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
        }
    });
}