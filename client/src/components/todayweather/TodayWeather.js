import React, { useContext,useState, useEffect } from 'react';
import axios from 'axios';
import {valuesContext} from '../../contexts/weather.contexts'
import ButtonSearch from '../searchButton/SearchButton'
import './TodayWeather.css'


const TodayWeather = () => {
    //city has the woeid
    const { city, setCity, dataWeather,setDataWeather } = useContext(valuesContext)
    const [showSearchC, setshowSearchC] = useState(false)

    const changeState = () => {
        setshowSearchC(true)
    }

    const getDataCity = async (city) => {
        let result = await axios.get(`/getWeatherCity/${city}`)
        console.log(result.data)
        return result.data
    }
    
    const renderSearchCity = () => {

    }

    useEffect(() => {
        if (city) {
            const excGetData = async()=>{
                let data = await getDataCity()
                setCity(data)
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
                    <p>O</p>
                </section>
                <section className='containerInfoT'>
                    <section className='weatherImg'>

                    </section>
                    <section className='maxTemp'>

                    </section>
                    <section className='weatherText'>

                    </section>
                    <section className='weatherDate'>

                    </section>
                    <section className='weatherLocation'>

                    </section>
                </section>
            </section>
        </section>
    );
}

export default TodayWeather;