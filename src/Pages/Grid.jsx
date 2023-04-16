import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Cell from '../Components/Cell';

export default function Grid() {

    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(0);
    const [grid, setGrid] = useState([]);
    const [arr, setArr] = useState([]);

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
                    handleClick={() => changeColor(r, c)}
                />
            );
            return newArr;
        });
    };


    useEffect(() => {
        let newArr = [];
        colorArr = [];

        setNumRows(Math.min(numRows, 15));
        setNumCols(Math.min(numCols, 15));

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                newArr.push(<Cell key={`${i}-${j}`} color={'white'} row={i} col={j} handleClick={() => changeColor(i, j)} />);
                colorArr.push('white');
            }
        }

        setArr(newArr);
    }, [numRows, numCols]);

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

    return (
        <div>
            <Navbar />

            <div className='container input-container'>
                <input type="number" name="row" id="row" placeholder='Enter no of rows (Maximum 15 rows)' required onChange={e => setNumRows(e.target.value)} />
                <input type="number" name="col" id="col" placeholder='Enter no of cols (Maximum 15 cols)' required onChange={e => setNumCols(e.target.value)} />
            </div>

            <div className="grid container">
                {grid}
            </div>
        </div>
    )
}
