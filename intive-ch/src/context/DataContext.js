import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {countries} from 'i18n-iso-countries'

const DataContext = React.createContext();



const DataProvider = (props) => {
    const [result, setResult] = useState([]);
    const [amountUsers, setAmountUsers] = useState(2);
    const [loadToggle, setLoadToggle] = useState(true)
    const [countryCodes, setCountryCodes] = useState([]);
    
    const addContent = (data) => {
        setResult(result.concat(data));
    }

    useEffect( () => {

         
        axios.get(`https://randomuser.me/api/?results=${amountUsers}`)
        .then(res => {
            addContent(res.data.results);
            res.data.results.forEach((item, index) => {
                let code = ''
                axios.get(`https://restcountries.eu/rest/v2/name/${item.location.country}`)
                .then(res => {
                    console.log(item.location.country)
                    console.log(res.data[0].alpha2Code)
                    code = res.data[0].alpha2Code;
                    setCountryCodes(countryCodes => [...countryCodes, code])
                })
            })
        })

    }, [loadToggle])

    // useEffect( () => {
    //     console.log(result)
    //     console.log(countryCodes)
    // }, [result, countryCodes])

    return(
        <>
            <DataContext.Provider
                value={{
                    data: result,
                    codes: countryCodes,
                    loadToggle: loadToggle,
                    changeLoadToggle: setLoadToggle
                }}
            >
                {props.children}
            </DataContext.Provider>
        </>
    )
}

export {DataProvider, DataContext}