import React from 'react'
import './Cities.css'

const Cities = (props) => {
    console.log('Cities props:', props)
    return(
        <section className='containerCities'>
            <section className='nameCity'>
                <p>{props.name}</p>
            </section>
        </section>
    );
}

export default Cities;