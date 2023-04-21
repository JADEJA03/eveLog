var router = require('express').Router()
var eventController = require('../controller/eventController')

router.post('/events',eventController.saveEvent)
router.get('/getEvent',eventController.getEvent)

router.post('/rejectevents',eventController.rejectEvent)
router.get('/getRejected',eventController.getRejectEvents)


router.post('/approveevents',eventController.approveEvent)
router.get('/getApproved',eventController.getApprovedEvents)

module.exports = router