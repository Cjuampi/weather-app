import React from 'react'
import './HightightsList.css'

const HightLigthList = (props) =>{
    /* console.log('hightlight....', props) */
    return(
        <section className='cntListHL'>
            <section className='topBoxes'>
                <section className='typeBOne'>
                    <span className='titleBx'>Wind status</span>
                    <span className='middlBx'>{Math.round(props.data.wind_speed)} mph</span>
                    <section className='windDirection'>
                        <span className='material-icons'>navigation</span>
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
                        <section className='firstBar'>
                            <section className='secondBar' style={{width : `${props.data.humidity}%`}}></section>
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
            <section className='createBy'><p>created by <span>Juampi</span> - devChallenges.io</p></section>
        </section>
    );
}

export default HightLigthList;