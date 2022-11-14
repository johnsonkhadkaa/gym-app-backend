const mongoose = require('mongoose')
const validator = require('validator')
 userRoleEnum= ['user', 'admin']
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
     },
     emergency_number : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 10
     },
     phone_number : {
         type : String,
         required : true,
         unique : true,
         trim : true,
         minlength : 10
     },
     email : {
        type : String,
        required : true,
        unique : true,
        trim : true, 
        lowercase : true,
        validate(value){
         if(!validator.isEmail(value)){
             throw new Error('Please input valid email') 
         }
        }
     },
     role : {
         type : String ,
         enum : userRoleEnum,
         default : userRoleEnum.user,
         trim : true,
         lowercase : true,
     },
     photo_url : {
        type : String ,
        trim : true,
     }
})
const User = mongoose.model('User', userSchema)

module.exports = {User, userRoleEnum}