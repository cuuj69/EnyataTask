const { Router } = require('express')

const controller = require('./controller')

const router = Router();

router.get("/", controller.getIncidents)
router.post("/", controller.addIncident)

// router.get("https://api.openweathermap.org/data/2.5/weather?q=Accra,ghana&APPID=c4a412020b7e28ffbb34ba34567ecb2a/", controller.getWeatherInfo)

module.exports = router