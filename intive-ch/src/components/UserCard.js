import React, {useContext, useState} from 'react';
import{ Link } from "react-router-dom"
import {DataContext} from '../context/DataContext.js';
import UserDetail from './UserDetail'
import Spin from './Spin/Spin';

const Test = (props) => {
    const {data, changeLoadToggle, setId} = useContext(DataContext);

    return(
        <>
        <div className="flex justify-center pt-12 lg:pt-6">
        <img className="h-24" src="https://1.bp.blogspot.com/-f9AptoV9utc/XUiDN6ABYgI/AAAAAAABXoM/71K-UJmH8JUueocbFUbouWs3YBZUiT1_gCLcBGAs/s1600/Logo%2Bintive.png">
        </img>
        </div>
            {(data.length > 0) ? 
            <div className="container p-12 w-full grid lg:grid-cols-3 gap-x-6 gap-y-4 content-center">
                
            {
            data.map((item, index) => (
                <div className=" flex flex-col space-y-4 justify-center items-center"
                key={index}
                onClick={() => setId(index)}
                >
                    <div className="bg-gradient-to-r from-red-200 via-white to-purple-300 w-full flex items-center p-2 rounded-xl shadow border">
                        <div className="flex items-center space-x-4">
                        <Link to={`/detail/${index}`}>
                            <img src={`${item.picture.medium}`} alt="My profile" className="w-16 h-16 rounded-full" />
                        </Link>
                        </div>
                        <div className="flex-grow p-3">
                        <div className="font-semibold text-gray-700">
                            {item.name.first} {item.name.last}
                        </div>
                        <div className="text-sm text-gray-500">
                            {item.location.city}, {item.location.country}
                        </div>
                        </div>
                        <div className="p-2">
                        <img src={`https://www.countryflags.io/${item.nat}/flat/48.png`} />
                        </div>
                    </div>
                </div>
            ))
    }
            </div>
                : <Spin />
            }
        </>

        
    )
}

export default Test


