const express = require('express')
const dbConnect = require('./db/mongoose')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

dbConnect()

app.use(express.json())
app.use(userRouter);



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})