'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./Book.model');


const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('users',userSchema)
const seedUserData = ( ) => {
const newUser= new userModel ({
    email:'email@gmail.com',
    books:[
        {
            name: 'In Search of Lost Time by Marcel Proust',
            description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narr... ",
            status: 'Available'
        },
        {
            name: 'Ulysses by James Joyce',
            description: "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss... ",
            status: 'Out of the stock'
        },
        {
            name: 'Don Quixote by Miguel de Cervantes',
            description: "Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes th... ",
            status: 'Comming Soon..'
        }
    ]    
})
console.log(newUser);
newUser.save();
}

module.exports = userModel;