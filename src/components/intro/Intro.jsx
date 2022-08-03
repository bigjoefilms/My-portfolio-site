import React from 'react'
import "./intro.css"
import projects from "../../img/Projects.png"
import about from "../../img/about.png"
import blog from "../../img/blog.png"
import contact from "../../img/contact.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, <wave className="bnt-wave"> 🖐🏽</wave> </h2>
                <h1 className="i-name">I'm Abanobi Joseph </h1>
                <div className="i-title">
                      <div className="i-title-description">Frontend Developer </div>
                    <div className="i-title-wrapper">
                        <div className="i-title-item">React.js </div>
                        <div className="i-title-item">Tailwind.css </div>
                        <div className="i-title-item">Typescript </div>
                        <div className="i-title-item">Web3.js </div>
                    </div>
                </div>
                <div className="i-desc">
                I'm a Frontend engineer based in Enugu, Nigeria, who hails from Abia state. He is so passionate about making the 
                web accessible to everyone and creating content around the tech space
                </div>
                <div className="i-resume-btn">Download Resume</div>
            </div>
            </div>
        <div className="i-right">
           <div className="i-right-imgs">

           <div className="i-right-img"><a href="" target="_blank"> <img src={projects} alt=" images"/> </a> </div>
           <div className="i-right-img"><a href="" target="_blank"> <img src={about} alt=" images"/> </a> </div>
           <div className="i-right-img"><a href="" target="_blank"> <img src={blog} alt=" images"/> </a> </div>
           <div className="i-right-img"><a href="" target="_blank"> <img src={contact} alt=" images"/> </a> </div>
            
            </div>

    </div>
    </div>
  )
}

export default Intro