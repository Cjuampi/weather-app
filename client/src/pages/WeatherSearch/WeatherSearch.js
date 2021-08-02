import React from 'react'

const WeatherSearch = () =>{
    return(
        <section className='containerWS'>
            <from>
                <input type='text' placeholder='City'/>
                <input type='submit' />
            </from>
        </section>
    );
}

export default WeatherSearch;
