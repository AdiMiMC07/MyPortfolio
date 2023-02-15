import React from 'react'
import '../styles/projects.css'
import photo from '../images/meInMetaverse.png'
import background from '../images/project_background2.png'
import myProjects from '../myprojects'
const Projects = () => {
    return (
        <>
        <div className="Projects">
            <div className="projects-palette">
                <div className="me-svg">
                    <img className='avatar' src={photo} alt="" width={"100%"}/>
                </div>
                <div className="project-section">

                    {myProjects.map((proj,index)=>{
                    return <div className="project-item" key={index} style={{width:`49%`}}>
                        <div className="project-card">
                            <div className="project-card-background">
                                <img src={proj.img} alt="proj-1_photo" />
                                <div className="bottom-grad"></div>
                            </div>
                            <div className="project-card-overlay">
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-details">
                                    {proj.desc}
                                </p>
                                <div className="navigations">
                                    <a className="github-link" href={proj.github} target={"_blank"} rel="noreferrer">Github <span className='skill-icon'><i className="fa-brands fa-github"></i></span></a>
                                    <a className={`live-project ${proj.live==="/"?"disable":""}`} target={"_blank"} rel="noreferrer" href={proj.live}>Live <span className='skill-icon'><i className="fa-solid fa-location-arrow"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>})}
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects