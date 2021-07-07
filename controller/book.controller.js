'use strict';

const { response } = require('express');
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

const createBook = (req, response) => {

    const { userEmail, name } = req.body;
    console.log(req.body)
    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error);
        }
        else {
          
            userData.books.push({ name: name });
            userData.save();
            response.json(userData);
        }
    })
}
const deleteBook = (req, res) => {

    const bookIndex = req.params.book_idx;
    const { email } = req.query;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error)
        } else {
            userData.books.splice(bookIndex, 1);
            userData.save();
            res.send(userData.books);
            
        }

    });
}



module.exports = {
    getBooks,
    createBook,
    deleteBook
}

