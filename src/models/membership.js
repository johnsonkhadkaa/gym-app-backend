const mongoose = require('mongoose')


const membershipSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
     },
     start_date :{
        type : Number
     } ,
     end_date : {
        type : Number
     },
     package : {
       type : mongoose.Schema.Types.ObjectId,
       ref : 'Package',
       
     },
     payment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Payment',
        
     }
})
const Member = mongoose.model('Member', membershipSchema)

module.exports = Member