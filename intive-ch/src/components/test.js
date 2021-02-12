import React, {useContext, useState} from 'react';
import {DataContext} from '../context/DataContext.js';

const Test = (props) => {
    const {data, loadToggle, changeLoadToggle, addContent} = useContext(DataContext);



    return(
        <button onClick={() => changeLoadToggle(!loadToggle)}>Data: {data.length}</button>
    )
}

export default Test