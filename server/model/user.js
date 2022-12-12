const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    Name : {
        type:String,
    },
    Age : {
        type: Number,
    },
    Gender : {
        type : String,
    },
    Batch : {
        type: String,
    },
    Email : {
        type : String ,
        unique:true
    },
    PayMonth : {
        type : String,
        default : "Pending"
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})
module.exports  = mongoose.model('User',UserSchema)
