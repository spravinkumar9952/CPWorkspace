import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';

export default function String() {
    const [text, setText] = useState("");
    const [len, setLen] = useState(0);
    const [palindrome, setPalindrome] = useState("True");
    const [panagram, setPanagram] = useState("False");

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


    useEffect(()=>{
        setLen(text.length);
        setPalindrome(isPalindrome(text) ? "True" : "False");
        setPanagram(isPanagram() ? "True" : "False");

    }, [text]);



    return (
        <div>
            <Navbar/>

            
            <div className="container input-container">
                <input type="text" name="text" id="text" className='align-items-center' placeholder='Enter the string' onChange = {(e) => setText(e.target.value)}/>
            </div>
            
            
            


            <div className="container info-container text-center">
                <h6>Your Text: <span>{text}</span></h6>
                <h6>Length : <span>{len}</span></h6>
                <h6>Is Palindrome : <span>{palindrome}</span></h6>
                <h6>Is Panagram : <span>{panagram}</span></h6>
            </div>


        </div>
    )
}
