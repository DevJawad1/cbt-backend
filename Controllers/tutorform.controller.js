const alltutor= require('../Modals/tutorsignup.modal')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const registertutor=(req, res)=>{
    // console.log(req.body);

    let savetutor = new alltutor(req.body)
    alltutor.findOne({email:req.body.email}).then((existed)=>{
        if(existed){
            res.send({status:false, message:"Email alredy existed"})
        }
        else{
            savetutor.save().then((result)=>{
                console.log(result);
                res.send({status:true, message:"Register successful"})
            }).catch((err)=>{
                console.log('can not signup tutor ',err);
            })
        }
    })
    
}

const logintutor= async(req, res)=>{
    const {email, password}= req.body
    alltutor.findOne({email:email}).then(async(result)=>{
        if(result){
            try{
                const findPassword = await result.comparePass(password)
                if(findPassword){
                    console.log('User found');
                    let token = jwt.sign({email}, SECRET, {expiresIn:"1h"})
                    res.send({ status: true, message: "User found", tutor: result, token });
                }
                else{
                    res.send({message:"Password  does not match"})
                }
            }catch(err){
                console.log('can not compare password ', err);
            }
        }
        else{
            res.send({message:"User not found"})
        }
    })
}

module.exports = {registertutor, logintutor}