import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from "../Components/Navbar"
import GraphImage from "../Assets/analytics.png"
import NumberImage from "../Assets/number-blocks.png"
import StringImage from "../Assets/string.png"
import DrawImage from "../Assets/pencil.png"
import GridImage from "../Assets/pixels.png"
import Grid from './Grid'

export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        
        <div className='info'>
            <h3>Welcome to CP Workspace</h3>
            <p>In CP workspace you can able to findout the tools, which will help in your CP Journey. </p>
            <p>If you have any Suggestion or found any Bugs please raise an issue. <a href="https://github.com/spravinkumar9952/CPWorkspace" target='#'>GitHub Project Link</a></p>
        </div>

        <div className="container link-cont ">
            
            <Link to='/graph' className='link text-center align-middle'><img src={GraphImage} alt="icon" /> Graph
                
            </Link>
            
            <Link to='/grid' className='link text-center align-middle'><img src={GridImage} alt="icon" />Grid</Link>
            <Link to='/string' className='link text-center align-middle'><img src={StringImage} alt="icon" />String</Link>
            <Link to='/number' className='link text-center align-middle'><img src={NumberImage} alt="icon" />Number</Link>
            <Link to='/draw' className='link align-baseline'><img src={DrawImage} alt="icon" />Draw</Link>
        </div>
    </div>
  )
}
