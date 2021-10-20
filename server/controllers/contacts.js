let express = require('express');
let router = express.router;
let mongoose = require('mongoose');

// create a reference to the db model
let Contacts = require('../models/contacts');

module.exports.displayContactList = (req, res, next) => {
    Contacts.find((err, contactList) => {
        if(err)
        {
            return console.error(err);    
        }
        else
        {
        res.render('contact/list', 
        {title: 'Contacts', 
        ContactList: contactList, 
        displayName: req.user ? req.user.displayName : ''});
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', 
    {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''})
}


module.exports.processAddPage = (req, res, next) => {
    let newContact = Contacts({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number,

    });

    Contacts.create(newContact, (err, contact) => {
        if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                res.redirect('/contact-list');
            }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, contactToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', 
            {title: 'Edit Contact', 
            contact: contactToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contacts({
        "_id" : id,
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number,

    });

    Contacts.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.render(err);
        }
        else
        {
            //refresh the book-list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.render(err);
        }
        else
        {
            //refresh the book-list
            res.redirect('/contact-list');
        }
    });
}