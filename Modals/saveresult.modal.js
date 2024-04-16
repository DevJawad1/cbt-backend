const mongoo = require('mongoose')

const resultSchema= ({
    studentname: String,
    result: Number,
    correctAnswer: Array,
    questionNoOption: Array,
    subject: String,
    grade: String,
    grade2: String,
    tutor: String,
})

let resultdb = mongoo.model("studentresult", resultSchema)
module.exports = resultdb