import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const PetList = (props) => {

    const {removeFromDom, pets, setPets} = props;
    // const { pets, setPets} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/api/pet/")
        .then((res)=> {
            console.log(res.data);
            setPets(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    } , [])

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {
                pets.map((pet, index) =>{
                return (
                    <div className='row' key={index} >
                        <div className='dashColumn1'>
                            <>{pet.petName}</>
                        </div>
                        <div className='dashColumn2'>
                            <>{pet.petType}</>
                        </div>
                        <div className='dashColumn3'>
                            <>
                            <Link to={`/pet/${pet._id}`} >Details| </Link><Link to={"/pet/edit/" + pet._id}>Edit</Link>
                            </>
                        </div>
                        {/* <button onClick={(e)=> {deletePet(pet._id)}}>Adopt Me!</button> */}
                    </div>                 
                )})
            }
        </div>
    )
}

export default PetList;