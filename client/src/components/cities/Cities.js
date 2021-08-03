import React, { useContext } from 'react'
import { valuesContext } from '../../contexts/weather.contexts'
import './Cities.css'

const Cities = (props) => {
    //console.log('Cities props:', props)
    const { setCity, searcher, setSearcher} = useContext(valuesContext)

    const changeWOEID = () =>{
        setCity(props.woeid);
        setSearcher(!searcher);
    }

    return(
        <section className='containerCities'>
            <section className='nameCity' onClick={changeWOEID}>
                <p>{props.name}</p>
            </section>
        </section>
    );
}

export default Cities;