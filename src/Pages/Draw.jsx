import React from 'react'
import DrawingArea from '../Components/DrawingArea'
import Navbar from '../Components/Navbar'

export default function Draw() {
  return (
    <div>
        <Navbar/>
        <h1>Draw the diagram below</h1>
        <DrawingArea className="container"/>
    </div>
  )
}
