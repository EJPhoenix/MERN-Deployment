import React, { useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const PetForm= (props) => {
    const {pets, setPets} = props;
    const [petName, setPetName] = useState("")
    const [petType, setPetType] = useState("")
    const [petDescription, setPetDescription] = useState("")
    const [petSkillOne, setPetSkillOne] = useState("")
    const [petSkillTwo, setPetSkillTwo] = useState("")
    const [petSkillThree, setPetSkillThree] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    
    const submitHandler = (e)=> {
        e.preventDefault();
        setPetName("");
        setPetType("");
        setPetDescription("");
        setPetSkillOne("");
        setPetSkillTwo("");
        setPetSkillThree("");
        setErrors({});
        axios.post('http://localhost:8000/api/pet', {
            petName,
            petType,
            petDescription,
            petSkillOne,
            petSkillTwo,
            petSkillThree
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
                setPets([...pets, res.data]);
                
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }


    return (
        
        <form onSubmit={submitHandler}>
            <Navbar/>
            <><h2>Know a pet needing a home?</h2></>
            <div className='formrow'>
                <div className='column1'>
                    <br/>
                    <label>Pet Name: </label>
                    <br/>
                    <input placeholder="Pet Name" type="text" value={petName} onChange = {(e)=>setPetName(e.target.value)}/>
                    {
                        errors.petName?
                        <p style={{color: "red"}}>{errors.petName.message}</p>:null
                    }
                    <pre/>
                    <label>Pet Type: </label>
                    <br/>
                    <select name="type" value={petType} onChange = {(e)=>setPetType(e.target.value)}>
                        <option value="" selected disabled hidden>Choose One</option>
                        <option value="Cat">Cat (More than 1 year old)</option>
                        <option value="Kitten">Kitten (Less than 1 year old)</option>
                        <option value="Dog">Dog (More than 1 year old)</option>
                        <option value="Puppy">Puppy (Less than 1 year old)</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Fish">Fish</option>
                        <option value="Other">Other-Enter in Description</option>
                    </select>
                    {
                        errors.petType?
                        <p style={{color: "red"}}>{errors.petType.message}</p>:null
                    }
                    <pre/>
                    <label>Pet Description: </label>
                    <br/>
                    <input placeholder='Description' type="text" value={petDescription} onChange = {(e)=>setPetDescription(e.target.value)}/>
                    {
                        errors.petDescription?
                        <p style={{color: "red"}}>{errors.petDescription.message}</p>:null
                    }
                </div>
                <div className='column2'>
                    <h3>Skills (Optional)</h3>
                    <label>Skill 1:</label>
                    <br/>
                    <input placeholder='Skill 1' type="text" value={petSkillOne} onChange = {(e)=>setPetSkillOne(e.target.value)}/>
                    <pre/>
                    <label>Skill 1:</label>
                    <br/>
                    <input placeholder='Skill 2' type="text" value={petSkillTwo} onChange = {(e)=>setPetSkillTwo(e.target.value)}/>
                    <pre/>
                    <label>Skill 1:</label>
                    <br/>
                    <input placeholder='Skill 3' type="text" value={petSkillThree} onChange = {(e)=>setPetSkillThree(e.target.value)}/>      
                </div>
            </div>
            
            <br/>
            <button type="submit">Add Pet</button>
            <br/>
            <br/>
        </form>
    )
}

export default PetForm;