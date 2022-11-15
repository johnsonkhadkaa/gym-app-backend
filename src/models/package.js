const mongoose = require('mongoose')


const packageSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        enum : ['1 month, 3 month , 6 month , 1 year']
        
     },
     duration_in_days : {
        type : String,
        enum : ['30 , 90 , 180 , 365']
    },
     discount_percentage : {
        type : String , 
    },
     photo_url : {
         type : String ,
         trim : true,
     },
     price : {
        type : String , 
        trim : true,
     }
})
const Package = mongoose.model('Package', packageSchema)

module.exports = Package