import React, {useContext} from 'react';
import {DataContext} from '../context/DataContext.js';


const UserDetail = (props) => {

    const {data, userId} = useContext(DataContext);


    return ( 

        <div className="container mx-auto pt-32">
        <div>

            <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div className="flex justify-center">
                        <img src={`${data[userId].picture.large}`} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">{`${data[userId].name.first} ${data[userId].name.last}`}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">{`'${data[userId].login.username}'`}</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div className="my-5">
                        <a href={`mailto:${data[userId].email}`} className="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">Contact {`${data[userId].name.first} by Mail `} 
                            <img className="h-6 pb-1 inline" src="https://banner2.cleanpng.com/20180704/hxr/kisspng-computer-icons-holzland-kster-font-awesome-email-5b3cc67aaf8599.455042101530709626719.jpg"></img>
                        </a>
                    </div>

                    <div className="w-full">
                        <h3 className="font-bold text-gray-600 text-left px-4">Information about {`${data[userId].name.first}:`}</h3>
                        <div className="mt-5 w-full">
                            <div className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150" >
                                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Username: {`${data[userId].login.username} since ${data[userId].registered.date.slice(5,7)}/${data[userId].registered.date.slice(8,10)}/${data[userId].registered.date.slice(0,4)} (${data[userId].registered.age} year/s ago)`}
                            </div>
                            
                            <div className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150" >
                                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Date of Birth: {`${data[userId].dob.date.slice(5,7)}/${data[userId].dob.date.slice(8,10)}/${data[userId].dob.date.slice(0,4)} (${data[userId].dob.age})`}
                            </div>

                            <div className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150" >
                                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    E-mail: {`${data[userId].email}`}
                            </div>

                            <div className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150" >
                                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Phone: {`${data[userId].cell}`}
                            </div>

                            <div className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150" >
                                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Full Address: {`${data[userId].location.street.name} ${data[userId].location.street.number}, ${data[userId].location.city}, ${data[userId].location.state}, ${data[userId].location.country}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
     );
}
 
export default UserDetail;