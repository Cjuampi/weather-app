import React from 'react';
import TodayW from '../../components/todayweather/TodayWeather'
import NextW from '../../components/nextweather/NextWeather';
import './WeatherMain.css'

const WeatherMain = () => {
    return (
        <section className='containerWM'>
            <section className='todayWeather'>
                <TodayW />
            </section>
            <section className='nextWeather'>
                <NextW />
            </section>
        </section>
    );
}

export default WeatherMain;