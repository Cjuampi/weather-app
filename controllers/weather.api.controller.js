const fetch = require('node-fetch');

const wApi = {
    home:(req,res)=>{
        console.log(req)
        res.status(200).json('Este es el home')
    },
    searchMatches:async(req,res) =>{
        //console.log(req)
        const nameCity = req.params.city
        console.log('nombreciudad',nameCity)
        let result = await fetch(`https://www.metaweather.com/api/location/search/?query=${nameCity}`)
        let data = await result.json()
        console.log(data)
        res.status(200).json(data)
    },
    getWeatherCity : (req,res) => {
        //usermos el woeid
        res.status(200).json('Trae la info de la ciudad')
    }
}
module.exports = wApi;