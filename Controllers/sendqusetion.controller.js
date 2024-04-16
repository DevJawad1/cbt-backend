const allquestion= require ('../Modals/uploadingqustion.modal')
const resultdb = require('../Modals/saveresult.modal')

const sendqusetion = (req, res) => {
    const gradeOne = req.body.gradeOne;
    const gradeTwo = req.body.gradeTwo;

    allquestion.find({
        $or: [
            { $and: [{ grade: gradeOne }, { grade: gradeTwo }] }, // Finds questions with both grades
            { grade: gradeOne }, // Finds questions with gradeOne
            { grade: gradeTwo }  // Finds questions with gradeTwo
        ]
    }).then((qst) => {
        if (qst.length > 0) {
            console.log(qst);
            resultdb.findOne({studentname:req.body.studentname}).then((rtfound)=>{
                if(rtfound){
                    qst = qst.filter((item) => !item.commence || item.subject === rtfound.subject);
                    console.log(qst);
                    // qst.map((item, i)=>{
                    //     console.log(rtfound.subject, item.subject, "matched");
                    // })
                    res.send({ question: qst, status:true });
                }
            }).catch((err)=>{
                console.log(err);
            })
        } else {
            console.log('No questions found for the specified grades');
            res.send({ question: [] ,status:false });
        }
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    });
}

const senttutorqst=(req, res)=>{
    allquestion.find({tutoremail:req.body.email}).then((result)=>{
        if(result){
            res.send({question:result, status:true, message:"Your question"})
        }else{
            res.send({message:"You have not set any question"})
        }
    }).catch((err)=>{
        console.log(err);
    })
}
const updatequestion=(req, res)=>{
    allquestion.findOne({_id:req.body.id}).then((result)=>{
        if(result){
            if(result.commence==false){
                result.commence=true
                let updateQuestion = new allquestion(result)
                updateQuestion.save().then((updated)=>{
                    if(updated){
                        res.send({status:true, message:"Permission allowed, student can now take exam"})
                    }
                })
            }else{
                result.commence=false
                let updateQuestion = new allquestion(result)
                updateQuestion.save().then((updated2)=>{
                    if(updated2){
                        res.send({status:false, message:"Permission removed, student cannot take the exam"})

                    }
                })
            }
        }
    })
}
module.exports={sendqusetion, senttutorqst, updatequestion}