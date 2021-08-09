import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {valuesContext} from '../../contexts/weather.contexts'
import ButtonSearch from '../searchButton/SearchButton'
import imagenes from '../../assets/dataFiles/imgData'
import './TodayWeather.css'


const TodayWeather = () => {
    const { city, dataWeather,setDataWeather,typeG,  setCity} = useContext(valuesContext)
    const [ currentPos, setCurrentPos ] = useState({})
    const [ existC, setExistC ] = useState(false)
    const getDataCity = async () => {
        let result = await axios.get(`/getWeatherCity/${city}`)
        return result.data
    }
    alert('test alerta')
    
    const getPosition = () =>{
        alert('entramos en la fgetposition')
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
            alert("lat: ",position.coords.latitude," lon: ",position.coords.longitude)
            setCurrentPos({"lat":position.coords.latitude,"lon":position.coords.longitude})   

          });
        }else{
            alert('geo no soportada') 
        }
        
    }

    const geoButton = async() =>{
        alert('click en el geolation')
       getPosition()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (city) {
            const excGetData = async()=>{
                let data = await getDataCity()
                setDataWeather(data)
            }
            excGetData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city])

    useEffect(()=>{
        alert('test fuera usEfct')
        if(currentPos.hasOwnProperty('lat')){
            alert('test dentro usEfct')
            const excGeoCity = async ()=>{
                let result = await axios.get(`/coordToCity/${currentPos.lat},${currentPos.lon}`)
                alert(result.data.results[0].components.city)
                return result.data.results[0].components.city
            }
            
            const excWoedi = async() =>{
                let cityName = await excGeoCity()
                let result =  await axios.get(`/searchMatches/${cityName}`)
                alert(result.data[0]['woeid'])
                if (result.data[0]['woeid']){
                    setCity(result.data[0]['woeid'])
                }else{
                    setExistC(true)
                }
            }

            excWoedi()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentPos])

    return (
        <section className='containerTW'>
            <section className='containerHBttns'>
                <section className='componentSBttn'>
                    <ButtonSearch />
                </section>
                <section className='componentLBttn' onClick={geoButton}>
                    <span className="material-icons">my_location</span>
                </section>
            </section>
            <section className='containerInfoT'>
                <section className='weatherImg'>
                    {dataWeather.length!==0? <img src={imagenes[`${dataWeather.consolidated_weather[0].weather_state_abbr}`]} alt={dataWeather.consolidated_weather[0].weather_state_name}/>: null}
                </section>
                {typeG ?
                    <section className='theTemp'>
                        {dataWeather.length !== 0 ? <span>{Math.round((`${dataWeather.consolidated_weather[0].the_temp}`*9/5) + 32)}<span id='symbTem'>&#8457;</span></span> : null}
                    </section>
                    :
                    <section className='theTemp'>
                        {dataWeather.length !== 0 ? <span>{Math.round(`${dataWeather.consolidated_weather[0].the_temp}`)}<span id='symbTem'>&#8451;</span></span> : null}
                    </section>
                }
                <section className='weatherText'>
                    {dataWeather.length!==0? <span>{dataWeather.consolidated_weather[0].weather_state_name}</span>: null}
                </section>
                <section className='weatherDate'>
                    {dataWeather.length!==0? 
                        <span>
                            Today · {new Date(dataWeather.consolidated_weather[0].applicable_date).toLocaleString("en-US", { weekday: "short" })}
                                    , {new Date(dataWeather.consolidated_weather[0].applicable_date).getDate() + " "} 
                                     {new Date(dataWeather.consolidated_weather[0].applicable_date).toLocaleString("en-US", { month: "short" })}
                        </span>: null}
                </section>
                <section className='weatherLocation'>
                    {dataWeather.length!==0?<span className="material-icons">location_on</span>: null}
                    {dataWeather.length!==0? <span>{dataWeather.title}</span>: null}
                </section>
            </section>
            <section className='notExist'>
                {existC===true?<h4>Ayeee! Data is no available for your city!</h4>:null}
            </section>
        </section>
    );
}

export default TodayWeather;