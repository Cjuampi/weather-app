import React, { useState, useContext, useEffect } from 'react'
import NextW from '../nextweatherlist/Nextweatherlist'
import HightL from '../hightightsList/HightightsList'
import { valuesContext } from '../../contexts/weather.contexts'
import './NextWeather.css'

const NextWeather = () =>{

    const { city, dataWeather, setTypeG } = useContext(valuesContext)
    const [ nextDaysData, setNextDaysData] = useState([])

    const changeToTypeC = () =>{
        setTypeG(false)
    }

    const changeToTypeF = () =>{
        setTypeG(true)
    }

    const renderNextDaysWeather = () =>{
        if(nextDaysData){
            return <NextW data={nextDaysData}/>
        }
    }

    const renderTodayHL = () =>{
        if(nextDaysData.length!==0){
            return <HightL data={nextDaysData[0]}/>
        }
    } 

    useEffect(()=>{
        if(dataWeather.length !== 0){
            let tmpA = dataWeather.consolidated_weather
            setNextDaysData(tmpA)
        }
    },[dataWeather])


    return(
        <section className='containerNW'>
            <section className='containerNextListW'>
                {nextDaysData.length===0?null:
                    <section className='changeM'>
                        <section className='sectionC' onClick={changeToTypeC}>
                            <span>&#8451;</span>
                        </section>
                        <section className='sectionF' onClick={changeToTypeF}>
                            <span>&#8457;</span>
                        </section>
                    </section>
                }
                {renderNextDaysWeather()}
            </section>
            <section className='containerHightLights'>
                <section className='titleHightLights'>
                    {nextDaysData.length===0?null:<span>Today's Hightlights</span>}
                </section>
                <section className='listHightLights'>
                    {renderTodayHL()}
                </section>
            </section>
        </section>
    );
}

export default NextWeather;