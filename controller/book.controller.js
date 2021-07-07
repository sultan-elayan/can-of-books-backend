'use strict';

const userModel = require('../models/usersSchema');
const getBooks = (req, res) => {
    const { email } = req.query;
    // console.log(email);
    userModel.findOne({ email: 'bardaweel95.rawan@gmail.com' }, (error, user) => {
        if (error) {
            res.send(error)
        }
        // console.log('user', user)
        res.send(user)
    });

}

const createBook = (req, res) => {

    const { userEmail, name, bookDesc, bookStatus } = req.body;
    console.log(req.body)
    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error);
        }
        else {
            // console.log(userData)
            
            userData.books.push({ name: name, description: bookDesc, status: bookStatus });
            userData.save();
            res.json(userData);
        }
    })
}


module.exports = {
    getBooks,createBook
}


