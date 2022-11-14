const mongoose = require('mongoose')


// Connection to DBSetup using mongoose 
const dbConnect= async()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/gym-app',{ 
    useNewUrlParser: true,
    useUnifiedTopology : true
})
console.log("Database connection successfull")
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}
 

module.exports= dbConnect
