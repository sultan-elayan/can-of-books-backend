
const userModel = require('../models/usersSchema');


// =============================================

const getBooks = (req, res) => {
   const email=req.query.userEmail  

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error)
        }
        res.send(userData.books);


// =============================================

let getBooks = (req, res) => {
    let email=req.query.userEmail  

    userModel.findOne({ email: 'bardaweel95.rawan@gmail.com' }, (error, books) => {
        if (error) {
            res.send(error)
        }
        res.send(books)
    });

}

// =============================================

const createBook = (req, response) => {
    
    const { userEmail, name, description, status } = req.body;
let createBook = (req, response) => {
    
    let { userEmail, name, description, status } = req.body;
    console.log(req.body)
    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error);
        }
        else {

            userData.books.push({
                name: name,
                description: description,
                status: status
            });
            userData.save();
            response.send(userData.books);
        }
    })
}

// =============================================

const deleteBook = (req, res) => {
    
    const  email  = req.query.userEmail;
    const bookIndex = Number(req.params.book_id);
    
    userModel.findOne({ email: 'bardaweel95.rawan@gmail.com' }, (error, userData) => {
        if(error){
            res.send('user not found');
        }else{
            userData.books.splice(bookIndex,1);
            user.save();
            res.send('book deleted')
        }
    })
}

// =============================================

const updateBook=(req,res)=>{
    const {userEmail,name,description,status}= req.body;
    const bookIndex=Number(req.params.book_idx);
    userModels.findOne({email:userEmail}, (error, userData)=>{
        if (error) {
            res.send(error);
        }
        else{
            userData.books.splice(bookIndex,1,{name:name,description:description,status:status});
            userData.save();
            res.send(userData.books)
        }
    })
}

module.exports = {
    getBooks,
    createBook,
    deleteBook,
    updateBook
}

// =============================================

let deleteBook = (req, res) => {
    
    let  userEmail  = req.query.userEmail;
    let bookIndex = Number(req.params.index);
    
    userModel.findOne({ email: userEmail }, (error, userData) => {
        let newBookArray=[];
        userData.books.forEach((item,idx)=>{
            if (idx!==bookIndex)
         {
             newBookArray.push(item);
         }
        })
        userData.books=newBookArray;
        userData.save();
        res.send(userData.books)

    });
}

// =============================================

let updateBook=(req,res)=>{
    let {userEmail,name,description,status}= req.body;
    let bookIndex=Number(req.params.index);
    userModels.findOne({email:userEmail}, (error, userData)=>{
        if (error) {
            res.send(error);
        }
        else{
            userData.books.splice(bookIndex,1,{name:name,description:description,status:status});
            userData.save();
            res.send(userData.books)
        }
    })
}

module.exports = {getBooks,createBook,deleteBook,updateBook}

