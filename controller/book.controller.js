
const userModel = require('../models/UserShema');


// =============================================

const getBooks = (req, res) => {
   const email=req.query.userEmail  

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error)
        }
        res.send(userData.books);
    });

}

// =============================================

const createBook = (req, response) => {
    
    const { userEmail, name, description, status } = req.body;
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
