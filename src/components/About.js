import React, { useRef } from 'react'
import '../styles/about.css'
import photo from '../images/profilepic.png'
const About = () => {
    const aboutWindow = useRef();
    
    return (
        <>
            <div className="about" id="about">
                <div className="application" onDoubleClick={()=>{
                    aboutWindow.current.style.display = "block"
                    console.log("hora hai")
                }}>
                    <img src={photo} alt="" width={"100%"} />
                    <span>About</span>
                </div>
                <div className="about-main" ref={aboutWindow}>
                    <div className="macOs-header">
                        <div className="header-btns">
                            <span className="close" onClick={() => {
                                aboutWindow.current.style.display = "none";
                            }}></span>
                            <span className="minimise"></span>
                            <span className="expand">
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
                            <hr style={{borderColor:"#b9b3aa4a"}}/>
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
                                    <hr style={{borderColor:"#b9b3aa4a"}}/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, error labore excepturi maxime enim reprehenderit nesciunt! Nemo voluptates, vel eius odio ut nostrum assumenda porro totam explicabo magnam reprehenderit necessitatibus.
                                    </p>
                                </div>
                                <div id="hobbies" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Hobbies</h3>
                                    <hr style={{borderColor:"#b9b3aa4a"}}/>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus recusandae hic aliquid iusto consequuntur aut numquam eveniet omnis voluptatem officiis corporis, ipsa nisi eius dolores odit! Hic quo eos dolorum! Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div id="achievements" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Achievements</h3>
                                    <hr style={{borderColor:"#b9b3aa4a"}}/>
                                    <p>
                                        Yeh meri achievements hain ekdum khali heheheheheh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About