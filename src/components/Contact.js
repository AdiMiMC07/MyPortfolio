import React from 'react'
import '../styles/contact.css'
const Contact = () => {
    return (
        <>
        <div className="Contact">
            <div className="contact-form-area">
                <form action="#" method="post">
                    <div className="main-form">
                        <div className="name">
                            <label htmlFor="name" className="name-label">
                                <h2>Name</h2>
                            </label>
                            <input type="text" id="name" className='name-input' required/>
                        </div>
                        <div className="emailID">
                            <label htmlFor="email" className="email-label">
                                <h2>Email</h2>
                            </label>
                            <input type="email" id="email" className='email-input' required/>
                        </div>
                        <div className="message">
                            <label htmlFor="message" className="message-label">
                                <h2>Message</h2>
                            </label>
                            <textarea type="text" id="message" className='msg-input' rows={3} required/>
                        </div>
                        <button className="form-btn btn">Submit</button>
                    </div>
                </form>
            </div>
            <div className="contact-photo-area"></div>
        </div>
        </>
    )
}

export default Contact