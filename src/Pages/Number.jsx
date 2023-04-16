import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';

export default function String() {

    const [number, setNumber] = useState(0);
    const [prime, setPrime] = useState("False");
    const [binary, setBinary] = useState(0);
    const [octal, setOctal] = useState(0);
    const [hex, setHex] = useState(0);
   
    const isPrime = () =>{

        for(let i=2; i*i<=number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }

    useEffect(()=>{
        setPrime(number < 0 ? "Negative value" : isPrime() ? "True" : "False");
        setBinary((number >>> 0).toString(2));
        setOctal((number >>> 0).toString(8));
        setHex((number >>> 0).toString(16));
    }, [number]);

    return (
        <div>
            <Navbar/>

            <div className="container input-container">
                <input type="number" name="text" id="text" className='align-items-center' placeholder='Enter the number' onChange = {(e) => setNumber(e.target.value)}/>
            </div>

            <div className="container info-container text-center">
                <table>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Your Number: </td>
                        <td>{number}</td>
                    </tr>
                    <tr>
                        <td>is Prime: </td>
                        <td>{prime}</td>
                    </tr>
                    <tr>
                        <td>is Catalan Number: </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>is Fibbanoci Number: </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Binary Form: </td>
                        <td>{binary}</td>
                    </tr>
                    <tr>
                        <td>Octal Form: </td>
                        <td>{octal}</td>
                    </tr>

                    <tr>
                        <td>Hexadecimal Form: </td>
                        <td>{hex}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
