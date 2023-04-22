import React from 'react'
import "../style.scss"
import { useNavigate } from 'react-router-dom'

import Logo from "../Assets/favicon.ico";

export default function Navbar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }
  
  return (
    <div className='nav-bar text-center'>
        
        <h1 onClick={navigateHome}><img src={Logo} alt="" />CP Workspace</h1>
    </div>
  )
}
