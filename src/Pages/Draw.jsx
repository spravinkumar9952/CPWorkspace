import React from 'react'
import DrawingArea from '../Components/DrawingArea'
import Navbar from '../Components/Navbar'

export default function Draw() {
    return (
        <div className='draw'>
            <Navbar />

            <div className="info">
                <h3>Draw</h3>
                <p>You can draw your thoughts like paint. To clear the board please refresh the page.</p>
            </div>

            <div className="container">
                <h3 className='text-center mt-5'>Draw the diagram below</h3>

                <div className="draw-area container mb-5">
                    <DrawingArea/>
                </div>
                
            </div>

        </div>
    )
}
