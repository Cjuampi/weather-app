import React, { useState, useContext, useEffect } from 'react'
import NextW from '../nextweatherlist/Nextweatherlist'
import HightL from '../hightightsList/HightightsList'
import { valuesContext } from '../../contexts/weather.contexts'
import './NextWeather.css'

const NextWeather = () =>{


    const { city, dataWeather } = useContext(valuesContext)
    const [ nextDaysData, setNextDaysData] = useState([])

    const renderNextDaysWeather = () =>{
        if(nextDaysData){
            /* console.log('dtawEATHERLIST:',nextDaysData); */
            return <NextW data={nextDaysData}/>
        }
    }

    const renderTodayHL = () =>{
        if(nextDaysData.length!==0){
            /* console.log('dtawHIGHTLIGHT:',nextDaysData) */
            return <HightL data={nextDaysData[0]}/>
        }
    } 

    useEffect(()=>{
        if(dataWeather.length !== 0){
            let tmpA = dataWeather.consolidated_weather
            setNextDaysData(tmpA)
/*             renderNextDaysWeather()
            renderTodayHL() */
        }
    },[dataWeather])


    return(
        <section className='containerNW'>
            <section className='containerNextListW'>
                <section className='changeM'>
                    <section className='sectionC'>
                        <span>&#8451;</span>
                    </section>
                    <section className='sectionF'>
                        <span>&#8457;</span>
                    </section>
                </section>
                {renderNextDaysWeather()}
            </section>
            <section className='containerHightLights'>
                <section className='titleHightLights'>
                    {console.log('para el title',nextDaysData)}
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