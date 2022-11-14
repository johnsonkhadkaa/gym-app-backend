const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', async(req, res) => {
    const user = new User(req.body)
     try{  
        await user.save()
        res.send({data : user})
        console.log(user)
     }catch(e){
       res.status(400).send()
     } 
})

router.get('/users', async(req, res) => {
  try{
    const users = await User.find({})
    console.log(users)
    res.send({data : users})
     
  }catch(e){
    res.status(404).send()
  }
})

router.get('/users/:id', async(req,res)=>{
    const _id = req.params.id
    
    try{
      const user = await User.findById(_id)
      console.log(user)
      res.send({data : user})
    }catch(e){
       res.status(404).send()
    }
})


module.exports = router