import React from 'react'
import '../styles/projects.css'
// import photo from '../myPhoto.png'
import background from '../project_background2.png'
import myProjects from '../myprojects'
const Projects = () => {
    return (
        <>
        <div className="Projects">
            <div className="projects-palette">
                <div className="me-svg">
                    {/* <img src={photo} alt="" /> */}
                </div>
                <div className="project-section">

                    {myProjects.map((proj,index)=>{
                    return <div className="project-item" key={index} style={{width:`32%`}}>
                        <div className="project-card">
                            <div className="project-card-background">
                                <img src={background} alt="proj-1_photo" />
                            </div>
                            <div className="project-card-overlay">
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-details">
                                    {proj.desc}
                                </p>
                                <div className="navigations">
                                    <a className="github-link" href={proj.github} target={"_blank"} rel="noreferrer">Github <span className='skill-icon'><i className="fa-brands fa-github"></i></span></a>
                                    <a className="live-project" target={"_blank"} rel="noreferrer" href={proj.live}>Live <span className='skill-icon'><i className="fa-solid fa-location-arrow"></i></span></a>
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