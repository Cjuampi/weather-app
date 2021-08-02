import React, { useContext } from 'react';
import axios from 'axios';
import {valuesContext} from '../../contexts/weather.contexts'
import ButtonSearch from '../searchButton/SearchButton'
import './TodayWeather.css'
const searchMatches = async (city) => {
    let result = await axios.get(`/searchMatches/${city}`)
    console.log(result.data)
    return result.data
}

//searchMatches('madrid')

const TodayWeather = () => {
    const { city, setCity } = useContext(valuesContext)
    return (
        <section className='containerTW'>
            <section className='containerHBttns'>
                <section className='componentSBttn'>
                    <ButtonSearch />
                </section>
                <section className='componentLBttn'>
                    <p>O</p>
                </section>
            </section>
        </section>
    );
}

export default TodayWeather;