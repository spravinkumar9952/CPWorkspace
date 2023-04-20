import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import numberData from "../Data/Number.json"

export default function String() {

    const [numbers, setNumbers] = useState([]);
    const [prime, setPrime] = useState("False");
    const [binary, setBinary] = useState(0);
    const [octal, setOctal] = useState(0);
    const [hex, setHex] = useState(0);
    const [catalan, setCatalan] = useState("False");
    const [fibonocci, setFibonocci] = useState("False");
    const [gcd, setGcd] = useState(0);

    const  isCatalan =() => {

        const res = [];

        for(let val of numbers){
            let isCat = "False";
            for(let i of numberData.catalan){
                if(i == val){
                    isCat = "True";
                    break;
                }
            }
            res.push(<span>{isCat}, </span>);
        }
        
        return res;
    }

    const isFinbonocci = () => {
        const res = [];

        for(let val of numbers){
            let isFib = "False";
            for(let i of numberData.fibbanoci){
                if(i == val){
                    isFib = "True";
                    break;
                }
            }
            res.push(<span>{isFib}, </span>);
        }
        
        return res;
    }

    const isPrime = () =>{
        const res = [];
        for(let val of numbers){
            let isPri = "True";
            for(let i=2; i*i<=val; i++){
                if(val % i === 0){
                    isPri = "False";
                    break;
                }
            }

            res.push(<span>{isPri}, </span>);
        }
        
        return res;
    }



    function egcd(a, b) {
        if (a == 0)
            return b;

        while (b != 0) {
            if (a > b)
                a = a - b;
            else
                b = b - a;
        }

        return a;
    }
    const getGcd = () => {
        let gcd = numbers[0];
        for(let i of numbers){
            gcd = egcd(i, gcd);
        }

        return gcd;
    }

    const parseInput = (e) =>{
        e.preventDefault();
        setNumbers(e.target.text.value.split(","));
    }

    useEffect(()=>{
        
        setPrime(isPrime() );
        setBinary(numbers.map((ele) => {
            return (parseInt(ele) >>> 0).toString(2) + ", ";
        }))
        setOctal(numbers.map((ele) => {
            return (parseInt(ele) >>> 0).toString(8) + ", ";
        }));
        setHex(numbers.map((ele) => {
            return (parseInt(ele) >>> 0).toString(16) + ", ";
        }));
        setCatalan(isCatalan());

        setFibonocci(isFinbonocci());

        setGcd(getGcd());

    }, [numbers]);

    return (
        <div>
            <Navbar/>

            <div className="container input-container">
                <form onSubmit={parseInput}>
                <input type="text" name="text" id="text" className='text' placeholder='Enter the number'/>
                <button>Build</button>
                </form>
                
            </div>

            <div className="container info-container text-center">
                <table>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Your Number: </td>
                        <td>{numbers.map((obj) => <span>{obj}, </span>)}</td>
                    </tr>
                    <tr>
                        <td>is Prime: </td>
                        <td>{prime}</td>
                    </tr>
                    <tr>
                        <td>is Catalan Number: </td>
                        <td>{catalan}</td>
                    </tr>
                    <tr>
                        <td>is Fibbanoci Number: </td>
                        <td>{fibonocci}</td>
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

                    <tr>
                        <td>Gcd: </td>
                        <td>{gcd}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
