import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DataContext = React.createContext();

const DataProvider = (props) => {
    const [result, setResult] = useState([]);
    const [amountUsers, setAmountUsers] = useState(50);
    const [loadToggle, setLoadToggle] = useState(true)
    
    const addContent = (data) => {
        setResult([...result, data]);
    }

    useEffect( () => {
        axios.get(`https://randomuser.me/api/?results=${amountUsers}`)
        .then(res => {
            addContent(res.data);
        })
    }, [loadToggle]

    )
    return(
        <>
            <DataContext.Provider
                value={{
                    data: result,
                    loadToggle: loadToggle,
                    changeLoadToggle: setLoadToggle,
                    addContent: addContent
                }}
            >
                {props.children}
            </DataContext.Provider>
        </>
    )
}

export {DataProvider, DataContext}