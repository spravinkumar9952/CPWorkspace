import React from 'react'
import "../style.scss"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <div className='nav-bar text-center'>
      <h1 onClick={navigateHome}>CP Workspace</h1>
    </div>
  )
}
