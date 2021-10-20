let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

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

module.exports = router;