import React from 'react'
import DrawingArea from '../Components/DrawingArea'
import Navbar from '../Components/Navbar'

export default function Draw() {
    return (
        <div>
            <Navbar />

            <div className="container">
                <h3 className='text-center mt-5'>Draw the diagram below</h3>

                <div className="draw-area container" style={{
                   
                }}>
                    <DrawingArea/>
                </div>
                
            </div>

        </div>
    )
}
