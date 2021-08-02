const router = require('express').Router()
const wAController = require('../controllers/weather.api.controller')

router.get('/',wAController.home)
//https://www.metaweather.com/api/location/search/?query=london
router.get('/searchMatches/:city', wAController.searchMatches)
//https://www.metaweather.com/api/location/44418/  -  woeid: Where On Earth ID
router.get('/getWeatherCity',wAController.getWeatherCity)
module.exports = router;