import React from 'react'
import logo from '../Vector 1.svg'
import Navbar from './Navbar'
import '../styles/home.css'
import moon from '../moon.png'
// import astronaut from '../astronaut.png'
const MainSection = () => {
    let X;
    let Y;
    // window.addEventListener("mousemove", (event) => {
    //     X = event.clientX;
    //     Y = event.clientY;
    //     moved(X, Y);
    // })
    function moved(X, Y) {
        let primdots = document.querySelectorAll(".pballs");
        let secdots = document.querySelectorAll(".sballs");
        let prevX, prevY;
        prevX = (window.innerWidth - X);
        prevY = (window.innerHeight - Y);
        for (let pridot of primdots) {
            pridot.style.transform = `translateX(${prevX*pridot.getAttribute('data-speed') / 20}px) translateY(${prevY*pridot.getAttribute('data-speed') / 20}px)`;
        }
        for (let secdot of secdots) {
            secdot.style.transform = `translateX(${prevX / 10}px) translateY(${prevY / 10}px)`;
        }
    }

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
                                Computer science</p>
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