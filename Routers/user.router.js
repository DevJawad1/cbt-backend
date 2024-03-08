const express = require('express')

const {uploadqst} = require('../Controllers/uploadquestion.controller')
const {registerstudent, loginstudent} = require('../Controllers/form.controller')
const {registertutor, logintutor} = require('../Controllers/tutorform.controller')
const {sendqusetion} = require ('../Controllers/sendqusetion.controller')
const router = express.Router()

router.post('/uploadqst', uploadqst)
router.post('/studentsignup', registerstudent)
router.post('/studentlogin', loginstudent)
router.post('/tutorsignup', registertutor)
router.post('/tutorlogin', logintutor)
router.post('/sendquestion', sendqusetion)

module.exports = router