const express = require('express')

const {uploadqst} = require('../Controllers/uploadquestion.controller')
const {registerstudent, loginstudent} = require('../Controllers/form.controller')
const {registertutor, logintutor} = require('../Controllers/tutorform.controller')
const {sendqusetion, senttutorqst, updatequestion} = require ('../Controllers/sendqusetion.controller')
const {handleresult, existedresult, sendresult} = require('../Controllers/Studentresult.controller')
const router = express.Router()

router.post('/uploadqst', uploadqst)
router.post('/studentsignup', registerstudent)
router.post('/studentlogin', loginstudent)
router.post('/tutorsignup', registertutor)
router.post('/tutorlogin', logintutor)
router.post('/sendquestion', sendqusetion)
router.post('/sendtutorqst', senttutorqst)
router.post('/updateqst', updatequestion)
router.post('/sendresult', handleresult)
router.post('/existedresult', existedresult)
router.post('/sendtutorresults', sendresult)

module.exports = router