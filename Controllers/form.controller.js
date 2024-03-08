const allstudent= require('../Modals/studentsignup.modal')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const registerstudent=(req, res)=>{
    console.log(req.body);

    let saveStudent = new allstudent(req.body)
    allstudent.findOne({username:req.body.username}).then((existed)=>{
        if(existed){
            res.send({status:false, message:"User name have been taking enter new one"})
        }
        else{
            saveStudent.save().then((result)=>{
                console.log(result);
                res.send({status:true, message:"Register successful"})
            }).catch((err)=>{
                console.log('can not signup student ',err);
            })
        }
    })
    
}

const loginstudent= async(req, res)=>{
    const {username, password}= req.body
    allstudent.findOne({username:username}).then(async(result)=>{
        if(result){
            try{
                const findPassword = await result.comparePass(password)
                if(findPassword){
                    console.log('User found');
                    let token = jwt.sign({username}, SECRET, {expiresIn:"1h"})
                    res.send({ status: true, message: "User found", student: result, token });
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

module.exports = {registerstudent, loginstudent}