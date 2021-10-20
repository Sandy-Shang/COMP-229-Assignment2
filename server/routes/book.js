let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

<<<<<<< HEAD
<<<<<<< HEAD
// connect to our Book Model
let Book = require('../models/books');

/* GET Route for the Book List page - READ OPeration */
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', {title: 'Books', BookList: bookList});       
        }
    });
});


/* GET Route for Displaying Add page - Create Operation */
router.get('/add', (req, res, next) =>{
    res.render('book/add', {title: 'Add Book'})
});

/* POST Route for Processing Add page - Create Operation */
router.post('/add', (req, res, next) =>{
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });
});

/* GET Route for Displaying Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) =>{
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit});
        }
    });
});

/* POST Route for Processing Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) =>{
    let id = req.params.id;

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.updateOne({_id: id}, updatedBook, (err) =>{
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
});

/* GET to preform Delete page - DELETE Operation */
router.get('/delete/:id', (req, res, next) =>{
    let id = req.params.id;

    Book.remove({ id: id}, (err) =>{
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
    })
});

=======
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
let passport = require('passport');


let bookController = require('../controllers/book');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List Page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add Page - CREATE Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add Page - CREATE Operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying the Edit Page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit Page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage);

/* GET Route to perform Deleteion - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);
<<<<<<< HEAD
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209
=======
>>>>>>> bb4d35f27cd3671c66e3481c237deb670972e209

module.exports = router;