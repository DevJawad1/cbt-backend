const setqustion= require('../Modals/uploadingqustion.modal')

const uploadqst=(req, res)=>{
    console.log(req.body);
    // console.log(req.body.question);

    let savequestion = new setqustion(req.body)
    savequestion.save().then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports= {uploadqst}