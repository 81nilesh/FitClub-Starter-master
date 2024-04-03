import React from 'react';
import './Footer.css';
import GitHub from "../../assets/github.png";
import Intagram from "../../assets/instagram.png"
import Linkedin from '../../assets/linkedin.png'
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <hr />
                <div className='footer'>
                    <div className="social">
                        <img src={GitHub} alt="" />
                        <img src={Intagram} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="blur blur-f"></div>
                <div className="blur blur-f-2"></div>
            </div>
        </div>
    );
}

export default Footer;
