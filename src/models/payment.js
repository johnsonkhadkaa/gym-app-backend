const mongoose = require('mongoose')


const paymentSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
     },
     amount : {
         type : String ,
         default : 0,
         trim : true,
     },
     package :[{
        type : Map
     }],
     processed_by : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User' 
     },
     paid_via : {
        type : String ,
        enum : ['e-sewa' ,'Khalti'],
        default:"e-sewa",
        required : true
     }
})
const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment