const express = require('express')
const router = express.Router()
const signuptemplte = require('../models/signUpModel')
  
router.post('/signUp', (req, res)=>{
  const newuser = new signuptemplte({
    fullname:req.body.fullname,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
  })
  newuser.save()
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
})

module.exports = router