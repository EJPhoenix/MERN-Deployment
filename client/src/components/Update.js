import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState("")
    const [petSkillTwo, setPetSkillTwo] = useState("")
    const [petSkillThree, setPetSkillThree] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res=> {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setPetSkillOne(res.data.petSkillOne);
                setPetSkillTwo(res.data.petSkillTwo);
                setPetSkillThree(res.data.petSkillThree);
                
            })
            .catch(err=> console.log(err))
    }, [])

    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            petName,
            petType,
            petDescription,
            petSkillOne,
            petSkillTwo,
            petSkillThree
        })
            .then(res=> {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <form onSubmit={updatePet}>
            <h2 className='editbanner'>Edit {petName}</h2>
                <div className='row1'>
                    <div className='column1'>
                        
                        <p>
                            <label>Pet Name: </label>
                            <br/>
                            <input type="text" name="petName" value={petName} onChange = { (e) => setPetName(e.target.value)}/>
                            {
                            errors.petName?
                            <p style={{color: "red"}}>{errors.petName.message}</p>:null
                            }
                        </p>
                        <p>
                            <label>Pet Type: </label>
                            <br/>
                            <select name="type" value={petType} onChange = {(e)=>setPetType(e.target.value)}>
                                <option> </option>
                                <option value="Cat">Cat (More than 1 year old)</option>
                                <option value="Kitten">Kitten (Less than 1 year old)</option>
                                <option value="Dog">Dog (More than 1 year old)</option>
                                <option value="Puppy">Puppy (Less than 1 year old)</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Fish">Fish</option>
                            </select>
                            {
                            errors.petType?
                            <p style={{color: "red"}}>{errors.petType.message}</p>:null
                            }
                        </p>
                        <p>
                            <label>Pet Description: </label>
                            <br/>
                            <input type="text" name="petDescription" value={petDescription} onChange = {(e)=>setPetDescription(e.target.value)}/>
                            {
                            errors.petDescription?
                            <p style={{color: "red"}}>{errors.petDescription.message}</p>:null
                            }
                        </p>
                    </div>
                    <div className='column2'>
                        <p>
                            <h4>Skills (Optional)</h4>
                            <label>Skill 1:</label>
                            <br/>
                            <input placeholder='Skill 1' value={petSkillOne} type="text" onChange = {(e)=>setPetSkillOne(e.target.value)}/>
                        </p>
                        <p>
                            <label>Skill 2:</label>
                            <br/>
                            <input placeholder='Skill 2' type="text" value={petSkillTwo} onChange = {(e)=>setPetSkillTwo(e.target.value)}/>
                        </p>
                        <p>
                        <label>Skill 3:</label>
                            <br/>
                            <input placeholder='Skill 3' type="text" value={petSkillThree} onChange = {(e)=>setPetSkillThree(e.target.value)}/>
                        </p>
                    </div>     
                </div>    
                <button>Edit Pet</button>
            </form>
        </div>
    )
}

export default Update;