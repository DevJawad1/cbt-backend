const resultdb = require('../Modals/saveresult.modal')
const handleresult=(req, res)=>{
    resultdb.findOne({studentname:req.body.studentname} && {subject:req.body.subject}).then((rtfound)=>{
        if(rtfound){
            res.send({status:false, message:"You have already done the exam before"})
        }else{
            let saveresult= new resultdb(req.body)
    saveresult.save().then((result)=>{
        if(result){ 
            res.send({status:true})
        }
    }).catch((err)=>{
        console.log(err);
    })
        }
    })
}

const existedresult=(req, res)=>{
    resultdb.findOne({studentname:req.body.tname} && {subject:req.body.subject}).then((rtfound)=>{
        if(rtfound){
            res.send({status:false, message:"You have already done the exam before"})
        }else{
            res.send({status:true})
        }
    }).catch((err)=>{
        console.log(err);
    })
}


const sendresult=(req, res)=>{
    console.log(req.body)

    resultdb.find({tutor:req.body.tutor}).then((result)=>{
        if(result){
            res.send({allresult:result})
        }
    }).catch((err)=>{
        console.log(err);
    })
    
    
}
module.exports = {handleresult, existedresult, sendresult}