import React from 'react';
import images from '../../assets/dataFiles/imgData';
import './NextDays.css'

const NextDays = (props) =>{
    console.log('elem props', props)
    return(
        <section className='boxDayWeather'>
            <section className='boxTitle'>
                <span>
                    {new Date(props.data.applicable_date).toLocaleString("en-US", { weekday: "short" })}, 
                    {new Date(props.data.applicable_date).getDate() + " "}
                    {new Date(props.data.applicable_date).toLocaleString("en-US", { month: "short" })}
                </span>
            </section>
            <section className='boxImage'>
                {<img src={images[`${props.data.weather_state_abbr}`]} alt={props.data.weather_state_name}/>}
            </section>
            <section className='boxMxMn'>
                <span className='maxTemp'> {Math.round(props.data.max_temp)}&#8451;</span>
                <span className='minTemp'>{Math.round(props.data.min_temp)}&#8451;</span>
            </section>
        </section>
    );
}

export default NextDays;