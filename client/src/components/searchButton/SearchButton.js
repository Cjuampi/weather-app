import React, { useEffect, useState,useContext } from 'react'
import {valuesContext} from '../../contexts/weather.contexts'
import './SearchButton.css'

const SearchButton = () =>{
    const { searcher, setSearcher } = useContext(valuesContext)
    const activateSearch = () =>{
        setSearcher(!searcher)
    }
    return (
        <section className='containerBSP'>
            <button className='searchPlacesBtn' onClick={activateSearch} >Search for places</button>
        </section>
    );
}

export default SearchButton;