import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';

export default function String() {
    const [number, setNumber] = useState(0);
   


    useEffect(()=>{
        
    }, [number]);



    return (
        <div>
            <Navbar/>

            
            <div className="container input-container">
                <input type="text" name="text" id="text" className='align-items-center' placeholder='Enter the number' onChange = {(e) => setNumber(e.target.value)}/>
            </div>
            
            
            


            <div className="container info-container text-center">
                <h6>Your Number: <span>{number}</span></h6>
                <h6>is Prime: <span></span></h6>
                <h6>is Catalan Number: </h6>
                <h6>is Fibbanoci Number: </h6>
                <h6>Binary Form: </h6>
                <h6>Octal Form: </h6>
                <h6>Hexadecimal Form: </h6>
            </div>
        </div>
    )
}
