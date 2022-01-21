import React from 'react'
import './Home.scss';
import titleimg from '../../Images/titleimg.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';

const Home = ()=>{
    return(
        <div class="container">
            <div class="bottomnavbar">
                <div class="navtoggle">
                    <a href="">Home</a>
                    <a href="">Dashboard</a>
                    <a href="">Profile</a>
                    <a href="">Setting</a>
                </div>
            </div>
            <div class="header">
                <div class="navbar">
                    <a href="">Home</a>
                    <a href="">Dashboard</a>
                    <a href="">Profile</a>
                    <button id="signinbtn">sign in</button>
                </div>
            </div>
            <div class="mainpage">
                <div class="firsthalf">
                    <div class="content">
                        <h1>Always the ride <br/> where you want</h1>
                        <h4>Self auto service for near travelling</h4>
                        <button id="booknowbtn">Book now</button>
                    </div>
                </div>
                <div class="secondhalf">
                    <img src={titleimg} alt=""/>
                </div>
            </div>
            <div class="sharetab">
                <h4>Share</h4>
                <FacebookIcon/>
                <WhatsAppIcon/>
                <InstagramIcon />
                <TwitterIcon />
                <MailIcon />
            </div>
        </div>
    )
}

export default Home