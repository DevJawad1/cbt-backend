const mongoo = require('mongoose')
let qusetionsch = mongoo.Schema({
    question: String,
    Ao: String,
    Bo: String,
    Co: String,
    Do: String,
    answer: String,
    styling: String,
    spaces: Number,
    no: Number,
})
const questionSchema= mongoo.Schema({
    subject: String,
    tutor: String,
    type: String,
    spaces:Number,
    grade: String,
    commence: Boolean,
    question:[qusetionsch]
})

let allquestion = mongoo.model('allQuestion', questionSchema)
// let allUser = mongoo.model('alltutor', tutorsignup)

module.exports = allquestion