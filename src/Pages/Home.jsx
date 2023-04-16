import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from "../Components/Navbar"

export default function Home() {
  return (
    <div>
        <Navbar/>

        <div className="container link-cont ">
            <Link to='/draw' className='link align-baseline'>Draw</Link>
            <Link to='/graph' className='link text-center align-middle'>Graph</Link>
            <Link to='/grid' className='link text-center align-middle'>Grid</Link>
            <Link to='/string' className='link text-center align-middle'>String</Link>
            <Link to='/number' className='link text-center align-middle'>Number</Link>
        </div>
    </div>
  )
}
