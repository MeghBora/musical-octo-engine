const express = require('express');
const User = require('../model/schema');
const mongodb = require('../db/conn');
const router = express.Router();

router.post('/Signup', async(req,res) =>{
    const {email, password, phone, cPass} = req.body;
   
   if((!email || !password || !phone || !cPass) ||(password != cPass)){
      res.status(406).json({massage: "please fill the data properly"});
   }else{
      try {
        
         const userExist = await User.findOne({email:email});

         if(userExist){
           return res.status(406).json({massage: "user already exist"});
         }else{
            const user = new User({email:email, password: password, phone:phone, cPass:cPass});
            const register = await user.save();
            if(register){
               res.status(201).json({massage: "user has been added to db"});
            }else{
               res.status(502).json({massage: "failed to register"});
            }
         }
      } catch (error) {
         console.log(error);
      }
    }
})


router.post('/login', async(req, res)=>{
   const {email , password} = req.body;
   try{
      const userExist = await User.findOne({email: email});
      if(userExist){
         const pass = userExist.cPass;
         if(pass === password){
           res.status(200).send({massage: `both password and email is correct `});
         }else{
            res.status(200).send({massage: `either password or email is not correct`});
         }
      }

   } catch(err){

   }
})

module.exports = router;