import React, { useRef } from 'react'
import '../styles/about.css'
import photo from '../images/profile.png'
import icons from '../images/index'
const About = () => {
    const aboutWindow = useRef();
    return (
        <>
            <div className="about" id="about">
                <div className="application" onDoubleClick={() => {
                    if (aboutWindow.current.style.opacity === "0") {
                        let element = document.querySelector('.profile-in-dock');
                        aboutWindow.current.style.width = "90%";
                        aboutWindow.current.style.height = "70%";
                        aboutWindow.current.style.left = "0%";
                        aboutWindow.current.style.top = "0%";
                        aboutWindow.current.style.opacity = "1";
                        element.style.display = "none";
                    }
                    aboutWindow.current.style.display = "block"
                }}>
                    <img src={photo} alt="" width={"100%"} />
                    <span style={{ fontWeight: "600", fontSize: "small", textShadow: ".15em .15em .5em black" }}>About</span>
                </div>
                <div className="about-main" ref={aboutWindow}>
                    <div className="macOs-header">
                        <div className="header-btns">
                            <span className="close" onClick={() => {
                                aboutWindow.current.style.display = "none";
                            }}></span>
                            <span className="minimise" onClick={() => {
                                let element = document.querySelector('.profile-in-dock');
                                if (aboutWindow.current.style.opacity !== "0") {
                                    aboutWindow.current.style.width = "10%";
                                    aboutWindow.current.style.height = "20%";
                                    aboutWindow.current.style.left = "30%";
                                    aboutWindow.current.style.top = "30%";
                                    aboutWindow.current.style.opacity = "0";
                                    element.style.display = "block";
                                }
                            }}></span>
                            <span className="expand" onClick={() => {
                                if (aboutWindow.current.style.width !== "100%") {
                                    aboutWindow.current.style.width = "100%";
                                    aboutWindow.current.style.height = "95%";
                                    aboutWindow.current.style.marginTop = "5em"
                                }
                                else {
                                    aboutWindow.current.style.width = "90%";
                                    aboutWindow.current.style.height = "75%";
                                }
                            }}>
                            </span>
                        </div>
                        <div className="about-title">
                            <span>About</span>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="about-navigation">
                            <h2 className="navigation-heading">About Me</h2>
                            <div className="profile">
                                <img src={photo} alt="aditya mishra" className="profile-pic" />
                                <h4>Aditya Mishra</h4>
                            </div>
                            <hr style={{ borderColor: "#b9b3aa4a" }} />
                            <ul className='about-elements'>
                                <li><a href="#overview" className='active' onClick={(e) => {
                                    let eles = document.querySelectorAll('.about-elements li a');
                                    for (let n of eles) {
                                        if (e.target !== n) {
                                            n.classList.remove('active');
                                        }
                                        else {
                                            n.classList.add('active');
                                        }
                                    }
                                }}>Overview</a></li>
                                <li><a href="#hobbies" onClick={(e) => {
                                    let eles = document.querySelectorAll('.about-elements li a');
                                    for (let n of eles) {
                                        if (e.target !== n) {
                                            n.classList.remove('active');
                                        }
                                        else {
                                            n.classList.add('active');
                                        }
                                    }
                                }}>Hobbies</a></li>
                                <li><a href="#achievements" onClick={(e) => {
                                    let eles = document.querySelectorAll('.about-elements li a');
                                    for (let n of eles) {
                                        if (e.target !== n) {
                                            n.classList.remove('active');
                                        }
                                        else {
                                            n.classList.add('active');
                                        }
                                    }
                                }}>Achievements</a></li>
                            </ul>
                        </div>
                        <div className="my-text">
                            <div className="frame">
                                <div id="overview" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Overview</h3>
                                    <hr style={{ borderColor: "#b9b3aa4a" }} />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, error labore excepturi maxime enim reprehenderit nesciunt! Nemo voluptates, vel eius odio ut nostrum assumenda porro totam explicabo magnam reprehenderit necessitatibus.
                                    </p>
                                </div>
                                <div id="hobbies" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Hobbies</h3>
                                    <hr style={{ borderColor: "#b9b3aa4a" }} />
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus recusandae hic aliquid iusto consequuntur aut numquam eveniet omnis voluptatem officiis corporis, ipsa nisi eius dolores odit! Hic quo eos dolorum! Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div id="achievements" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Achievements</h3>
                                    <hr style={{ borderColor: "#b9b3aa4a" }} />
                                    <p>
                                        Yeh meri achievements hain ekdum khali heheheheheh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-footer">
                    <div className="footer-content">
                        <div className="main-dock-icons">
                            <span className="about-footer-icons"><img src={icons.icons.terminal} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                            <span className="about-footer-icons"><img src={icons.icons.vscode} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                            <span className="about-footer-icons chrome-dotted"><img src={icons.icons.chrome} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                            <span className="about-footer-icons"><img src={icons.icons.safari} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                            <span className="about-footer-icons"><img src={icons.icons.mail} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                            <span className="about-footer-icons" style={{boxShadow:".1em 0 0 0 black"}}><img src={icons.icons.settings} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                            <span className="about-footer-icons profile-in-dock" onClick={() => {
                                let element = document.querySelector(".profile-in-dock")
                                aboutWindow.current.style.width = "90%";
                                aboutWindow.current.style.height = "70%";
                                aboutWindow.current.style.left = "0%";
                                aboutWindow.current.style.top = "0%";
                                aboutWindow.current.style.opacity = "1";
                                element.style.display = "none";
                            }}><img src={icons.icons.profile} alt="" style={{ width: "50%", margin: "auto" }} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About