import React, { useContext,useState, useEffect } from 'react';
import axios from 'axios';
import {valuesContext} from '../../contexts/weather.contexts'
import ButtonSearch from '../searchButton/SearchButton'
import './TodayWeather.css'


const TodayWeather = () => {
    const { city, setCity } = useContext(valuesContext)
/*     const [showSearchC, setshowSearchC] = useState(false)

    const changeState = () => {
        setshowSearchC(true)
    }

    const searchMatches = async (city) => {
        let result = await axios.get(`/searchMatches/${city}`)
        console.log(result.data)
        return result.data
    }
    
    const renderSearchCity = () => {
        console.log('renderizo')
        return <SearchCity />
    }

    useEffect(() => {
        if (showSearchC) {
            console.log('entro if showSearchC')
            renderSearchCity()
        }
    }, [showSearchC]) */

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