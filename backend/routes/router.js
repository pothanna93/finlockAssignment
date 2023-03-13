const express = require("express") 
const jwtToken = require("jsonwebtoken")

const userSignUpTemplate = require("../models/signUpModel") 
const bcrypt = require("bcrypt")

const router = express.Router()




router.post("/signup",async(request,response)=>{ 

    const saltPassword = await bcrypt.genSalt(10) 
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)
    
    const signupUser = new userSignUpTemplate({
          username:request.body.username,
          password:securedPassword
          }) 

    signupUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

    
}) 

router.post("/login",async(req,res)=>{
    const {username,password} =  req.body;  
    console.log(username,password)
    const user = await userSignUpTemplate.findOne({username:username}); 
      
    
        if(user === null){
            res.status(400);
            res.send("invalid user");
        }else{
            const ispasswordmatch = await bcrypt.compare(password,user.password) 
            //console.log(ispasswordmatch);
            if(ispasswordmatch === true){
                const payload={
                    username:username
                }
                const jwt = jwtToken.sign(payload,"mytoken") 
                const val = {jwt,name:payload.username}
                res.send(val) 
                
            }else{
                res.status(401)
                res.send("invalid password")
            }
        }
        
})

module.exports = router