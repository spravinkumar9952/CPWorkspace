import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';

export default function String() {
    const [text, setText] = useState("");
    const [len, setLen] = useState(0);
    const [palindrome, setPalindrome] = useState("True");
    const [panagram, setPanagram] = useState("False");
    const [freq, setFreq] = useState("");

    const isPalindrome= () => {
        let low = 0, high = text.length-1;

        while(low < high){
            if(text[low] != text[high]){
                return false;
            }
            low++;
            high--;
        }

        return true;
    }

    const isPanagram= () =>{
        let map = [], ctr = 0;

        for(let i=0; i<26; i++){
            map.push(false);
        }

        for(let c in text.toLocaleLowerCase()){
            if(map[c]==false)
                ctr++;
            if(ctr == 26)
                return true;
            map[c] = true;
        }

        return false;
    }

    const getFreq = () => {
        let map = new Map();

        for(let c of text){
            if(map.has(c)){
                map.set(c, map.get(c)+1);
            }else{
                map.set(c, 1);
            }
        }

        map = new Map([...map.entries()].sort());
        let freqArr = []

        for(let [key, val] of map){ 
            freqArr.push(<p>{key} = {val}</p>);
        }

        return freqArr;
    }


    useEffect(()=>{
        setLen(text.length);
        setPalindrome(isPalindrome(text) ? "True" : "False");
        setPanagram(isPanagram() ? "True" : "False");
        setFreq(getFreq());
    }, [text]);

    return (
        <div>
            <Navbar/>
            
            <div className="container input-container">
                <input type="text" name="text" id="text" className='align-items-center' placeholder='Enter the string' onChange = {(e) => setText(e.target.value)}/>
            </div>
            
            <div className="container info-container text-center">   
                <table>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Your Text</td>
                        <td>{text}</td>
                    </tr>
                    <tr>
                        <td>Length</td>
                        <td>{len}</td>
                    </tr>
                    <tr>
                        <td>Is Palindrome </td>
                        <td>{palindrome}</td>
                    </tr>
                    <tr>
                        <td>Is Panagram</td>
                        <td>{panagram}</td>
                    </tr>
                    <tr>
                        <td>Frequencies</td>
                        <td>{freq}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
