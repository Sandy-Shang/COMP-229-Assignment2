let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    name: String,
    email: String,
    number: String,
},
{
    collection: "Contact"
});

module.exports = mongoose.model('Contact', contactModel);