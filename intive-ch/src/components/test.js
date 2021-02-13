import React, {useContext, useState} from 'react';
import {DataContext} from '../context/DataContext.js';

const Test = (props) => {
    const {data, codes, loadToggle, changeLoadToggle} = useContext(DataContext);



    return(
        <>
        <button onClick={() => changeLoadToggle(!loadToggle)}>Data: {data.length} + {codes.length} </button>

        {(data.length > 0 && codes.length == data.length) ? 

        data.map((item, index) => (

            <div className="container mx-auto max-w-sm flex flex-col space-y-4 justify-center items-center"
            key={index}
            >
                <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                    <div className="flex items-center space-x-4">
                    <img src={`${item.picture.medium}`} alt="My profile" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                        {item.name.title}. {item.name.first} {item.name.last}
                    </div>
                    <div className="text-sm text-gray-500">
                        {item.location.city}, {item.location.country}
                    </div>
                    </div>
                    <div className="p-2">
                    <img src={`https://www.countryflags.io/${codes[index]}/flat/48.png`} />
                    </div>
                </div>
            </div>
        ))
            : 'loading'
        }
        </>

        
    )
}

export default Test


