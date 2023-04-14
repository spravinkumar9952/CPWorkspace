import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import DrawingArea from '../Components/DrawingArea';


export default function Grid() {

  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);
  const [grid, setGrid] = useState([]);


  useEffect(()=>{
    
    let rows = [];

    setNumRows(Math.min(numRows, 10));
    setNumCols(Math.min(numCols, 10));

    for (let i = 0; i < numRows; i++) {
      const cols = [];
      for (let j = 0; j < numCols; j++) {
        cols.push(<div key={`${i}-${j}`} className='col cell text-center' id={`${i}-${j}`}>
          {`(${i},${j}) `}
          <span contentEditable="true"></span>
        </div>);
      }
      rows.push(<div key={i} className='row'>{cols}</div>);
    }

    setGrid(rows)
    console.log(numRows, numCols);
  },[numRows, numCols]);

  

  return (
    <div>

      <Navbar/>

      <div className='container input-container'>
        
        <input type="number" name="row" id="row" placeholder='Enter no of rows' required onChange={e => setNumRows(e.target.value)}/>
        <input type="number" name="col" id="col" placeholder='Enter no of cols' required onChange={e => setNumCols(e.target.value)}/>
      </div>



      <div className='grid container'>
        {grid}
      </div>
      

      
    </div>
  )
}
