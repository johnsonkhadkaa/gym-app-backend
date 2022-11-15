const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', async(req, res) => {
    const user = new User(req.body);
     try{  
        await user.save()
        res.send({data : user})
        console.log(user)
     }catch(e){
       res.status(400).send()
     } 
})

router.post('/users/login', async(req,res)=>{ 
  try{
     const user = await User.findByPhoneNumber(req.body.phone_number)
     res.send({data : user})
  //   res.send('Hello welcome!')
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


router.patch('/users/:id', async(req,res)=>{
  const updates = Object.keys(req.body)
  const validUpdates = ['name','emergency_number','phone_number','email','role','photo_url']
  // const isValidOperation = updates.every((update)=>{
  //  return validUpdates.includes()
  // })
  const _id = req.params.id

  // if(!isValidOperation){
  //     res.status(404).send({error:'Invalid update '+ updates +' field doesnt exist'})
  // }

   try{

       const user = await User.findById(_id)
       updates.forEach((update)=>user[update] = req.body[update])
   //    const task = await Tasks.findByIdAndUpdate(_id ,req.body ,{new : true, runValidators:true})
      await user.save()
      if(!user){
         res.status(404).send()
      }
      res.send(user)
   }catch(e){
      res.status(400).send(e)
   }
})

router.delete('/users/:id', async(req,res)=>{
  const _id = req.params.id
  
  try{
      const user = await User.findByIdAndDelete(_id)
      if(!user){
     res.status(404).send()
      }
   res.send(user)   
  }catch(e){
  res.status(400).send(e)
  }
  
})



module.exports = router