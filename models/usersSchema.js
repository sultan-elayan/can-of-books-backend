'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./Book.model');


const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});


const userModel = mongoose.model('users',userSchema)
const newUser= new userModel ({
    email:'bardaweel95.rawan@gmail.com',
    books:[
        {
            name: 'the secret',
            description: "The Secret is a self-help book by Rhonda Byrne that explains how the law of attraction, which states that positive energy attracts positive things into your life, governs your thinking and actions, and how you can use the power of positive thinking to achieve anything you can imagine. ",
            status: 'available'
        },
        {
            name: 'The magic',
            description: "In The Magic, Rhonda Byrne reveals life-changing knowledge about the power of gratitude that was hidden within a two-thousand year old sacred text. ... No matter who you are, no matter where you are, no matter what your current circumstances, The Magic is going to change your entire life!",
            status: 'out of the stock'
        },
        {
            name: 'The power',
            description: "The book is based on the law of attraction and claims that positive thinking can create life-changing results such as increased happiness, health, and wealth. Byrne describes this as a fundamental universal law akin to gravity. There are observations in The Power, such as the importance of being nice to your water. ",
            status: 'available'
        }]    
})
console.log(newUser);
newUser.save();

module.exports= userModel ;