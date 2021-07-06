'use strict';

const userModel = require('../models/usersSchema');
const getBooks = (req,res)=>{
    const {email} = req.query;
    console.log(email);
    userModel.findOne({ email:'bardaweel95.rawan@gmail.com'  }, (error, user) => {
        if (error) {
            res.send(error)
        } 
console.log('user',user)
            res.send(user)
        });
        
    }

module.exports = getBooks;
