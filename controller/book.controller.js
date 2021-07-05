'use strict';

const userModel = require('../models/usersSchema');

const getBooks = (req,res)=>{
    const {email} = req.query;
    // console.log(email);
    userModel.find({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        } else {
            res.send(user)
        }
    });
}

module.exports = getBooks;
