const mongoose = require('mongoose')


// Connection to DBSetup using mongoose 
mongoose.connect('mongodb://127.0.0.1:27017/gym-app',{ 
    useNewUrlParser: true,
    useUnifiedTopology : true
})

