import React from 'react'
import './Home.scss';
import titleimg from "../../Images/titleimg.png";
import instagram from "../../Images/instagramicon.png";
import facebook from "../../Images/Facebookicon.png";
import twitter from "../../Images/twittericon.png";
import gmail from "../../Images/gmailicon.png";
import whatsapp from "../../Images/whatsappicon.png";

const Home = ()=>{
    return(
        <div className='header'>
            <nav>
                <div className='nav-links'>
                    <ul>
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>Profile</li>
                    </ul>
                    <a className='signin-btn'>Sign in</a>
                </div>
            </nav>
            <div className="title">
                <div className="firsthalf">
                    <h1>Always the ride <br /> where you want</h1>
                    <h3>Self auto service for near travelling</h3>
                    <a href="" className="booknow-btn">Book now</a>
                </div>
                <div className="secondhalf">
                    <img src={titleimg} alt="" />
                </div>
            </div>
            <div className="sharebtns">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={gmail} alt="" />
                <img src={whatsapp} alt="" />
                <h4>Share</h4>
            </div>
        </div>
    )
}

export default Home