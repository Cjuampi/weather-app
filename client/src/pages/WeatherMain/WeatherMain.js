import React, { useContext } from 'react';
import TodayW from '../../components/todayweather/TodayWeather'
import NextW from '../../components/nextweather/NextWeather';
import SearchCity from '../../components/searchcity/SearchCity'
import {valuesContext} from '../../contexts/weather.contexts'
import './WeatherMain.css'

const WeatherMain = () => {
    const { searcher, setSearcher } = useContext(valuesContext)

    return (
        <section className='containerWM'>
            {!searcher?(
                <section className='todayWeather'>
                    <TodayW />
                </section>
            ):(
                <section>
                    <SearchCity/>
                </section>
            )}
            <section className='nextWeather'>
                <NextW />
            </section>
        </section>
    );
}

export default WeatherMain;