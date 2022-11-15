const express = require('express');
const Package = require('../models/package');
const router = new express.Router()


router.post('/packages', async(req, res) => {

    const package = new Package(req.body);
     try{  
        await package.save()
        res.send({data : package})
        console.log(package)
     }catch(e){
       res.status(400).send()
     } 
})

router.get('/packages', async(req, res) => {
  try{
    const packages = await Package.find({})
    console.log(packages)
    res.send({data : packages})
     
  }catch(e){
    res.status(404).send()
  }
})

router.get('/packages/:id', async(req,res)=>{
    const _id = req.params.id
    
    try{
      const package = await Package.findById(_id)
      console.log(package)
      res.send({data : package})
    }catch(e){
       res.status(404).send()
    }
})


module.exports = router