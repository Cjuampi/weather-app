const router = require('express').Router()
const wAController = require('../controllers/weather.api.controller')

router.get('/',wAController.home)
router.get('/searchMatches/:city', wAController.searchMatches)
router.get('/getWeatherCity/:woeid',wAController.getWeatherCity)
router.get('/coordToCity/:coords',wAController.getCity)

module.exports = router;