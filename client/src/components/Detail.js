import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Detail = (props) => {
    const [pet, setPet] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
    axios.get("http://localhost:8000/api/pet/" + id)
        .then(res => {
            console.log(res.data);
            setPet(res.data);
        })
        .catch( err=>console.log(err) )
    }, []);

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                navigate("/");
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className='detailsbanner'>
                <h2>Details About: {pet.petName}</h2>
                <p><button onClick={(e)=> {deletePet(pet._id)}}>Adopt {pet.petName}</button></p>
            </div>
            <div className='petdetailbox'>
                <div className='column1'>
                    <p>Pet Type:</p>
                    <p>Description:</p>
                    <p>Skills:</p>
                </div>
                <div className='column2'>
                <p>{pet.petType}</p>
                <p>{pet.petDescription}</p>
                <p>{pet.petSkillOne}<br/>{pet.petSkillTwo}<br/>{pet.petSkillThree}</p>
                </div>
            </div>       
        </div>
    )
}

export default Detail;