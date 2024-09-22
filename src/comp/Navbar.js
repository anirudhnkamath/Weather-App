import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <h1>
        {props.heading}
      </h1>
    </div>
  )
}
