const mongoose = require('mongoose')
const validator = require('validator')
// const bcrypt = require('bcryptjs')
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

userSchema.statics.findByPhoneNumber = async (phone_number)=> {
    const user = await User.findOne({phone_number})
    
    if(!user){
     throw new Error('Unable to login')
  }

    // const isMatch = await bcrypt.compare(phone_number, user.phone_number)

    //  if(!isMatch){
    //    throw new Error('Unable to login')
    //  }

   return user
}

const User = mongoose.model('User', userSchema)

module.exports = User
// module.exports = {User, userRoleEnum}