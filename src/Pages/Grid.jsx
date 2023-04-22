import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Cell from '../Components/Cell';

export default function Grid() {

    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(0);
    const [grid, setGrid] = useState([]);
    const [arr, setArr] = useState([]);
    const [gridVal, setGridVal] = useState([]);

    let colorArr = [];

    const changeColor = (r, c) => {
        const index = r * numCols + c;
        colorArr[index] = colorArr[index] === 'white' ? 'yellow' : 'white';

        setArr(prevArr => {
            const newArr = [...prevArr];
            const index = r * numCols + c;
            newArr[index] = (
                <Cell
                    key={`${r}-${c}`}
                    color={colorArr[index]} 
                    row={r}
                    col={c}
                    val = {gridVal[r][c]}
                    handleClick={() => changeColor(r, c)}
                />
            );
            return newArr;
        });
    };


    useEffect(() => {
        let newArr = [];
        colorArr = [];

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                newArr.push(<Cell key={`${i}-${j}`} color={'white'} row={i} col={j} val = {gridVal[i][j]} handleClick={() => changeColor(i, j)} />);
                colorArr.push('white');
            }
        }
        setArr(newArr);
    }, [numRows, numCols, gridVal]);

    useEffect(() => {
        const newGrid = [];

        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = 0; j < numCols; j++) {
                row.push(arr[i * numCols + j])
            }
            newGrid.push(<div>{row}</div>);
        }

        setGrid(newGrid);
    }, [arr]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        
        const currRow = e.target.gridValue.value.split("\n");
        const newGridVals = []

        if(parseInt(e.target.row.value) !== currRow.length){
            alert("Row Not matched");
            return ;
        }

        

        for(let i of currRow){
            newGridVals.push(i.split(" "));
            if(i.split(" ").length !==parseInt(e.target.row.value)){
                alert("Col not matched")
                return ;
            }
        }

        setNumRows(parseInt(e.target.row.value));
        setNumCols(parseInt(e.target.col.value));
        setGridVal(newGridVals);
    }

    return (
        <div>
            <Navbar />

            <div className="info">
                <h3>Grid</h3>
                <p>You can enter your grid size. If you touch the cell it will toggle the color. You can also enter the by clicking the top of the cell.</p>
            </div>

            <div className='container input-container'>

                <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
                    <div className='d-flex flex-row justify-content-start align-items-center mb-4'>
                        <input type="number" className="mr-3" name="row" id="row" placeholder='Enter no of rows (Maximum 15 rows)' required  />

                        <input type="number" name="col" id="col" placeholder='Enter no of cols (Maximum 15 cols)' required  />
                    </div>
                    
                   
                    <textarea name="gridValue" id="" cols="50" rows="10"></textarea>
                    
                
                    <button className='mt-3'>Build Grid</button>
                </form>
                
            </div>

            <div className="grid container">
                {grid}
            </div>
        </div>
    )
}
