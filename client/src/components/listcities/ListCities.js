import React, { useEffect } from 'react'
import City from '../cities/Cities'
import './ListCities.css'

const ListCities = (props) =>{
    console.log('propsdataaaList', props )
    const renderList = () =>{
        return props.data.map((ele,i)=>{
           return <City key={ele.woeid} woeid={ele.woeid} name={ele.title} />
        })
    }

    return(
        <section className='containerListCities'>
            {props.data?renderList():null}
        </section>
    );
}

export default ListCities;