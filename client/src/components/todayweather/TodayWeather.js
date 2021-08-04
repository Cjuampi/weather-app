import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {valuesContext} from '../../contexts/weather.contexts'
import ButtonSearch from '../searchButton/SearchButton'
import imagenes from '../../assets/dataFiles/imgData'
import './TodayWeather.css'


const TodayWeather = () => {
    //city has the woeid
    const { city, dataWeather,setDataWeather } = useContext(valuesContext)

    const getDataCity = async () => {
        let result = await axios.get(`/getWeatherCity/${city}`)
       /*  console.log(result.data) */
        return result.data
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
    }, [city])

    return (
        <section className='containerTW'>
            <section className='containerHBttns'>
                <section className='componentSBttn'>
                    <ButtonSearch />
                </section>
                <section className='componentLBttn'>
                    <span className="material-icons">my_location</span>
                </section>
            </section>
            <section className='containerInfoT'>
                <section className='weatherImg'>
                    {/* {console.log('dataWeather----',dataWeather[0])} */}
                    {dataWeather.length!==0? <img src={imagenes[`${dataWeather.consolidated_weather[0].weather_state_abbr}`]}/>: null}
                </section>
                <section className='theTemp'>
                    {dataWeather.length!==0? <span>{Math.round(`${dataWeather.consolidated_weather[0].the_temp}`)}<span id='symbTem'>&#8451;</span></span>: null}
                </section>
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
        </section>
    );
}

export default TodayWeather;