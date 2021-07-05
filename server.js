'use strict';
const express=require('express');
const app=express();
const cors=require('cors');
const jwt=require('jsonwebtoken');

const mongoose=require('mongoose');
// const jwksClient=require('jwks-rsa');
require('dotenv').config();

const port = process.env.PORT
const seedUserData = require('./models/usersSchema')
// const usersSchema= require('./models/usersSchema')
const bookController = require('./controller/book.controller')
app.use(cors());
  
mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });




app.get('/', (req,res)=>{
   res.send('heeelllllllllllllo')
})

app.get('/books', bookController);
// app.get('/', usersSchema);
seedUserData();

app.listen(port,()=>{
    console.log(`listening to port: ${process.env.PORT}`);
})



  // TODO: 
  // STEP 1: get the jwt from the headers
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

// ====================================================



// const client = jwksClient({
//     // this url comes from your app on the auth0 dashboard 
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//   });

// // this is a ready to use function
// const getKey=(header, callback)=>{
//     client.getSigningKey(header.kid, function(err, key) {
//         const signingKey = key.publicKey || key.rsaPublicKey;
//         callback(null, signingKey);
//       });
// }

// // 'Bearer ;kkkkkkkkkkkkkkkkkkkkkkkkk'
// app.get('/authorize',(req,res)=>{
//     const token=req.headers.authorization.split(' ')[1];
//     jwt.verify(token,getKey,{},(err,user)=>{
//         if(err){
//             res.send('invalid token');
//         }
//         res.send(user)
//     })
//     res.send(token);
// });
