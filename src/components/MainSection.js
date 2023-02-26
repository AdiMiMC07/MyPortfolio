import React from 'react'
import logo from '../Vector 1.svg'
import '../styles/home.css'
const MainSection = () => {
    return (
        <>
            <div className="content" id="home">
                <div className="container">
                    <div className="base">
                        <div className="intro-cont">
                            <p id="name">ADITYA MISHRA</p>
                            <p id="intro-para">
                                Hi, I am Aditya Mishra,<br />
                                Frontend Developer and a sophomore majoring in
                                Mathematics and
                                Computer Science</p>
                            <img className="logo-img pballs" data-speed="0.71" src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection