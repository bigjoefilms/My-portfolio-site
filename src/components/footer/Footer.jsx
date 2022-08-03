import React from 'react'
import "./footer.css"
import twitter from "../../img/bxl-twitter.png"
import instagram from "../../img/bxl-instagram.png"
import github from "../../img/bxl-github.png"
import linkedin from "../../img/bxl-linkedin.png"
const Footer = () => {
  return (
    <div className="i-footer">
        <div className="i-footer-img"><a href="https://twitter.com/AbanobiJoseph?t=K_VVVL5RTyCwEfGxZLpvow&s=09" rel="noreferrer" target="_blank"> <img src={twitter} alt="footer images"/> </a> </div>
        <div className="i-footer-img"><a href="https://github.com/bigjoefilms" rel="noreferrer" target="_blank"><img src={instagram} alt="footer images"/> </a> </div>
        <div className="i-footer-img"><a href="https://github.com/bigjoefilms" rel="noreferrer" target="_blank"> <img src={github} alt="footer images"/> </a></div>
        <div className="i-footer-img"><a href="https://www.linkedin.com/in/abanobi-joseph-712733216" rel="noreferrer" target="_blank"> <img src={linkedin} alt="footer images"/> </a> </div>
    </div>
  )
}

export default Footer