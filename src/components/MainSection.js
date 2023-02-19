import React, { useRef } from 'react'
import logo from '../Vector 1.svg'
import Navbar from './Navbar'
import '../styles/home.css'
import moon from '../images/moon.png'
// import astronaut from '../astronaut.png'
const MainSection = () => {
    return (
        <>
            <div className="content">
                <Navbar />
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
                            <div className="primary-balls">
                                {/* <img src={moon} className="pballs" id="pball-1" data-speed="2" alt="" width={"200px"} />
                                <img src={moon} className="pballs" id="pball-2"  data-speed="2" alt="" width={"200px"} />
                                <img src={moon} className="pballs" id="pball-3"  data-speed="2" alt="" width={"200px"} />
                                 */}
                            </div>
                            <div className="secondary-balls">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection