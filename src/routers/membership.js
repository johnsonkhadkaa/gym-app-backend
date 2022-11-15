const express = require('express');
const Member = require('../models/membership');
const router = new express.Router()
const User = require('../models/user')

router.post('/membership', async(req, res) => {

    const member = new Member(req.body);
     try{  
        await member.save()
        res.send({data : member})
        console.log(member)
     }catch(e){
       res.status(400).send()
     } 
})

router.get('/membership', async(req, res) => {
  try{
    const members = await Member.find({})
    console.log(members)
    res.send({data : members})
     
  }catch(e){
    res.status(404).send()
  }
})

router.get('/membership/:id', async(req,res)=>{
    const _id = req.params.id
    
    try{
      const member = await Member.findById(_id)
      console.log(member)
      res.send({data : member})
    }catch(e){
       res.status(404).send()
    }
})


module.exports = router