const express = require('express')
const dbConnect = require('./db/mongoose')
require('./db/mongoose')
const userRouter = require('./routers/user')
const memberRouter = require('./routers/membership')
const paymentRouter = require('./routers/payment')
const packageRouter = require('./routers/package')

const app = express()
const port = process.env.PORT || 3000

// dbConnect()
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(userRouter)
app.use(memberRouter)
app.use(paymentRouter)
app.use(packageRouter)
// app.use("/",userRouter);



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})