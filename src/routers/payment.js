const express = require('express');
const Payment = require('../models/payment');
const router = new express.Router()


router.post('/payment', async(req, res) => {

    const payment = new Payment(req.body);
     try{  
        await payment.save()
        res.send({data : payment})
        console.log(payment)
     }catch(e){
       res.status(400).send()
     } 
})

router.get('/payment', async(req, res) => {
  try{
    const payments = await Payment.find({})
    console.log(payments)
    res.send({data : payments})
     
  }catch(e){
    res.status(404).send()
  }
})

router.get('/payments/:id', async(req,res)=>{
    const _id = req.params.id
    
    try{
      const payment = await Payment.findById(_id)
      console.log(payment)
      res.send({data : payment})
    }catch(e){
       res.status(404).send()
    }
})


module.exports = router