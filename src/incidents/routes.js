const { Router } = require('express')

const controller = require('./controller')

const router = Router();

router.get("/", controller.getIncidents)
router.post("/", controller.addIncident)


module.exports = router