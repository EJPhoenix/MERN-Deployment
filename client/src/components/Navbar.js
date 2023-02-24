import React from 'react';
import {Link} from 'react-router-dom'
import "../App.css"


const Navbar = (props) => {
    return (
        <div className='Navbar'>
            {/* <p>
                    <Link to={'/pet/'}>Adopt a Pet!</Link>
            </p> */}
            <div>
                <h1>Pet Shelter</h1>
            </div>
            <div>
                <p>
                <Link to={'/'}>Back to Home</Link>
                </p>
            </div>
        </div>
    )}


export default Navbar;