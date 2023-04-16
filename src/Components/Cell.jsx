import React from 'react'

export default function Cell({color, row, col, handleClick}) {
    return (
        <div className='cell' style={{backgroundColor : `${color}`}} onClick={() => handleClick()}>
            <p contentEditable='true'>0</p>
            <p>({row}, {col})</p>
        </div>
    )
}
