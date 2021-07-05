'use strict';

const mongoose=require('mongoose');


const usersSchema = new mongoose.Schema({
    email: String,
    books: [bookSchema],
  });


  
  module.exports=usersSchema
