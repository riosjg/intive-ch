import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {countries} from 'i18n-iso-countries'

const DataContext = React.createContext();



const DataProvider = (props) => {
    const [result, setResult] = useState([]);
    const [amountUsers, setAmountUsers] = useState(50);
    const [loadToggle, setLoadToggle] = useState(true)
    const [userId, setUserId] = useState();
    
    const addContent = (data) => {
        setResult(result.concat(data));
    }

    const setId = (id) => {
        setUserId(id);
    }

    function infiniteScroll(){
        // checks if the user reached the bottom of the page
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
          const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
          if (scrollTop + window.innerHeight + 50 >= scrollHeight){
            setLoadToggle(!loadToggle);
            console.log('final')
          }
    }

    useEffect( () => {
        axios.get(`https://randomuser.me/api/?results=${amountUsers}`)
        .then(res => {
            addContent(res.data.results);
        })

        window.addEventListener('scroll', infiniteScroll);
        return () => window.removeEventListener('scroll', infiniteScroll);
    }, [loadToggle])

    return(
        <>
            <DataContext.Provider
                value={{
                    data: result,
                    loadToggle: loadToggle,
                    changeLoadToggle: setLoadToggle,
                    userId: userId,
                    setId: setId
                }}
            >
                {props.children}
            </DataContext.Provider>
        </>
    )
}

export {DataProvider, DataContext}