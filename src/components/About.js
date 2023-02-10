import React from 'react'
import '../styles/about.css'
import photo from '../myPhoto.png'
const About = () => {
    return (
        <>
        <div className="about">
            <div className="about-main">
                <div className="about-content">
                    <div className="about-para">
                        <h2>About</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo natus voluptates, sed quam vel odit harum amet nam debitis modi eos quis dolorum assumenda, provident in ullam a quasi quos? Neque accusantium nihil ratione, perspiciatis rem cumque ullam vitae voluptatibus totam officiis amet dignissimos reprehenderit nobis iusto repudiandae minima, architecto dicta dolorum distinctio. Quam doloremque necessitatibus reprehenderit enim cumque ex, quas officiis nisi, natus quo itaque consequuntur. Distinctio repellendus vel officia ut molestiae nulla doloremque suscipit quidem mollitia perferendis harum voluptatum iste cum sunt iure dolorum ab inventore soluta vitae incidunt nobis odit, magni fugit eos? Doloribus, possimus quo.
                        </p>
                    </div>
                    <div className="my-photo">
                        <img src={photo} alt=""/>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aliquid autem eaque modi facilis possimus itaque soluta cumque tempora nobis rerum unde blanditiis amet, perspiciatis minima beatae alias quia et.</p> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About