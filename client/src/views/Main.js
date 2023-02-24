import React, { useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import {Link} from 'react-router-dom'


const Main = (props) => {

    const [pets, setPets] = useState([]);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id != petId));
    }

    return (
        <div>

<div className='Navbar'>

            <div>
                <h1>Pet Shelter</h1>
            </div>
            <div>
                <p>
                <Link to={'/pet'}>Add a Pet to the Shelter</Link>
                </p>
            </div>
        </div>

            {/* <br></br> */}
            {/* <PetForm pets={pets} setPets={setPets}/> */}
            <hr/>
            <h3 className='homeBanner'>These Pets are Looking for a Good Home!</h3>
            <div className='row'>
                <h4 className='dashColumn1'>Name</h4>
                <h4 className='dashColumn2'>Type</h4>
                <h4 className='dashColumn3'>Actions</h4>
            </div>
            <PetList pets={pets} setPets={setPets} removeFromDom={removeFromDom}/>
            
            
        </div>
    )
}

export default Main;