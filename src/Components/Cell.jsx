import React from 'react'

export default function Cell({color, row, col, handleClick}) {
    return (
        <div className='cell' style={{backgroundColor : `${color}`}} onClick={() => handleClick()}>
            <h4 contentEditable='true'></h4>
            <p>({row}, {col})</p>
        </div>
    )
}
