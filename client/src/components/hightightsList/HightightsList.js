import React, { useEffect, useState } from 'react'
import Deg from '../../assets/dataFiles/compass'
import './HightightsList.css'

const HightLigthList = (props) =>{
    const [ directionW, setDirectionW ] = useState(props.data.wind_direction_compass)

    const renderDirection = () =>{
        if(directionW){
            return  <span className='material-icons'  style={{transform: `rotate(${Deg[directionW]}deg)`}}>navigation</span> 
        }else{
            return  <span className='material-icons'>navigation</span> 
        }
    } 
    useEffect(()=>{
        if(props.data.wind_direction_compass){
            setDirectionW(props.data.wind_direction_compass)
            renderDirection()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data.wind_direction_compass])

    return(
        <section className='cntListHL'>
            <section className='topBoxes'>
                <section className='typeBOne'>
                    <span className='titleBx'>Wind status</span>
                    <span className='middlBx'>{Math.round(props.data.wind_speed)} mph</span>
                    <section className='windDirection'>
                        <section className='spanWD'>
                            {renderDirection()}            
                        </section>
                        <span className='txtDirection'>{props.data.wind_direction_compass}</span>
                    </section>
                </section>
                <section className='typeBOne'>
                    <section className='humidity'>
                        <span className='titleBx'>Humidity</span>
                    </section>
                    <section className='pHumidity'>
                        <span className='middlBx'>{props.data.humidity}%</span>
                    </section>
                    <section className='humidityBar'>
                        <section className='hpercentage'>
                            <section className='nhpercentage'>0</section>
                            <section className='nhpercentage'>50</section>
                            <section className='nhpercentage'>100</section>
                        </section>
                        <section className='firstBar'>
                            <section className='secondBar' style={{width : `${props.data.humidity}%`}}></section>
                        </section>
                        <section className='symbol'>
                            <section className='nhpercentage'>%</section>
                        </section>
                    </section>
                </section>
            </section>
            <section className='bottomBoxes'>
                <section className='typeBTwo'>
                    <span className='titleBx'>Visibility</span>
                    <span className='middlBx'>{props.data.visibility.toFixed(1)} miles</span>
                </section>
                <section className='typeBTwo'>
                    <span className='titleBx'>Air Pressure</span>
                    <span className='middlBx'>{Math.round(props.data.air_pressure)} mb</span>
                </section>
            </section>
            <section className='createBy'><p>created by <a href='https://github.com/Cjuampi/weather-app'><span>Juampi</span></a> - <a href='https://devchallenges.io/'>devChallenges.io</a></p></section>
        </section>
    );
}

export default HightLigthList;