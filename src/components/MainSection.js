import React, { useState } from 'react'
import logo from '../Vector 1.svg'
import About from './About'
import Navbar from './Navbar'
const MainSection = () => {

    return (
        <>
            <div className="content">
                <Navbar/>
                <div className="container">
                    <div className="base">
                        <div className="intro-cont">
                            <p id="name">ADITYA MISHRA</p>
                            <p id="intro-para">
                                Hi, I am Aditya Mishra,<br />
                                Frontend Developer and a sophomore majoring in
                                Mathematics and
                                Computer science</p>
                            <img className="logo-img" src={logo} alt="" />
                            <div className="dots">
                            </div>
                        </div>
                    </div>
                </div>
                <About/>
            </div>
        </>
    )
}

export default MainSection