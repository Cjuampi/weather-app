import React from 'react'
import Days from '../nextdays/NextDays'
import './Nextweatherlist.css'

const NextWeatherList = (props) =>{

    const daysList = () =>{
        return props.data.map((ele,index) =>{
            if(index > 0 ){
                return <Days key={index} data={ele} pos={index}/>
            }else{
                return null
            }
        })
    }



    return(
        <section className='containerListNextW'>
            {props.data?daysList():null}
        </section>
    );
}

export default NextWeatherList;