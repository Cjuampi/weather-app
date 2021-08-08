const fetch = require('node-fetch');

const wApi = {
    home:(req,res)=>{
        console.log(req)
        res.status(200).json('Este es el home')
    },
    searchMatches:async(req,res) =>{
        //console.log(req)
        const nameCity = req.params.city
        //console.log('nombreciudad',nameCity)
        let result = await fetch(`https://www.metaweather.com/api/location/search/?query=${nameCity}`)
        let data = await result.json()
        //console.log(data)
        res.status(200).json(data)
    },
    getWeatherCity : async (req,res) => {
        //usermos el woeid
        const woeid = req.params.woeid
        //console.log('el woeid', woeid)
        let result = await fetch(`https://www.metaweather.com/api/location/${woeid}`)
        //console.log('el result', result)
        let data = await result.json()
        res.status(200).json(data)
    },
    getCity : async (req,res) =>{
        
        const [lat, lon] = req.params.coords.split(',')
  
        let result = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${process.env.KEYGEO}`)
        let data = await result.json()
        res.status(200).json(data)
    }
}
module.exports = wApi;