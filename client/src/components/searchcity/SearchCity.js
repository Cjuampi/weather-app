import React, { useContext, useEffect, useState } from 'react';
import {valuesContext} from '../../contexts/weather.contexts';
import ListCities from '../listcities/ListCities'
import axios from 'axios'
import './SearchCity.css';

const WeatherSearch = () =>{
    const { searcher, setSearcher } = useContext(valuesContext)
    const [ citiesS, setCitiesS ] = useState([])
    const [ tmpinputTxt, setTmpInpuTxt ] = useState('')
    const [ inputTxt, setInpuTxt ] = useState('')
    const [ existC, setExistC ] = useState(false)

    const activateSearch = () =>{
        setSearcher(!searcher)
    }

    const catchInput = (e) =>{
        setExistC(false)
        setTmpInpuTxt(e.target.value)
    }

    const onSubmitInput = (e) => {
        e.preventDefault()
        setInpuTxt(tmpinputTxt)
    }
    
    const getMatches = async() =>{
        let result =  await axios.get(`/searchMatches/${inputTxt}`)
        return result.data

    }

    const showResutls = () =>{
        return <ListCities data={citiesS}/>
    }

    useEffect(()=>{
        if(inputTxt){
            const excGetData = async () =>{
                let result = await getMatches()
                if (result.length !== 0){
                    setCitiesS(result)
                }else{
                    setExistC(true)
                }
            }

            excGetData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inputTxt])


    return(
        <section className='containerWS'>
            <section className='closeBttn'>
                <span className='material-icons' onClick={activateSearch} >close</span>
            </section>
            <section className='containerForm'>
                <form onSubmit={onSubmitInput}>
                    <input type='text' placeholder='Search Location' onChange={catchInput} id='inputSCity' />
                    <input type='submit' className ='searchBttnLeft' value='Search' id='submitBttn'/>
                </form>
            </section>
            <section className='notExist'>
                {existC===true?<h4> Ayeee! We don't have the weather for your city</h4>:null}
            </section>
            <section className='containerResult'>
                {citiesS?showResutls():null}
            </section>
        </section>
    );
}

export default WeatherSearch;
