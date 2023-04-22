import React from 'react'

export default function Cell({color, row, col, val, handleClick}) {
    return (
        <div title = {`(${row}, ${col})`}className='cell' style={{backgroundColor : `${color}`}} onClick={() => handleClick()}>
            <h4 >{val}</h4>
        </div>
    )
}
