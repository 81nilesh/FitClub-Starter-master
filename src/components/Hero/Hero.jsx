import React from 'react';
import './Hero.css'
import hero_images from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import Header from '../Header/Header';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                    {/* the best ad */}
                    <div className="the-best-ad">
                        <div></div>
                        <span>The Best Fitness Club In The Town</span>
                    </div>

                    {/* Hero Heading */}
                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>

                        <div>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                        </div>
                    </div>

                    {/* figure */}
                    <div className='figures'>
                        <div>
                            <span>+ 140</span>
                            <span>EXPERT COACHES</span>
                        </div>
                        <div>
                            <span>+ 978</span>
                            <span>MEMBERS JOINED</span>
                        </div>
                        <div>
                            <span>+ 50</span>
                            <span>FITNESS PROGRAMS</span>
                        </div>
                    </div>
                    {/* hero button */}
                    <div className="hero-buttons">
                        <buttons className="btn">Get Started</buttons>
                        <buttons className="btn">Learn More</buttons>
                    </div>
                </div>
                <div className="right-h">
                    <button className="btn">Join Now</button>


                    <div className="heart-rate">
                        <img src={heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </div>

                    {/* hero images */}
                    <img src={hero_images} alt="" className='hero-image' />
                    <img src={hero_image_back} alt="" className='hero-image-back' />

                    {/* calories */}
                    <div className="calories">
                        <img src={calories} alt="" />

                        <div>
                            <span>Calories burned</span>
                            <span>220 kcal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
