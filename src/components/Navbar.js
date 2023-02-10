import React from 'react'
import logo from '../Vector 1.svg'
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li><a href="#base">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar