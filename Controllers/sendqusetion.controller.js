const allquestion= require ('../Modals/uploadingqustion.modal')

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
            res.send({ question: qst, status:true });
        } else {
            console.log('No questions found for the specified grades');
            res.send({ question: [] ,status:false }); // Sending an empty array if no questions found
        }
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error'); // Sending a server error response if something goes wrong
    });
}


module.exports={sendqusetion}