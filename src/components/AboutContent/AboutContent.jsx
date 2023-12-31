import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import react1 from "../assests/react1.png"
import react2 from "../assests/react2.png"


function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
            A Full stack Web developer and designs a user friendly web design using React and Node.
            </p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} alt="" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={react2} alt="" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent