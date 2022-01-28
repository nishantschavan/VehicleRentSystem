import React from 'react'
import './Home.scss';
import titleimg from '../../Images/titleimg.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from '../../Components/Header/header';
import { useHistory } from 'react-router-dom';

const Home = ()=>{

    const history = useHistory();
    const navigateTo = () => history.push('/Booknowpage1');

    return(
        <div class="Home-container">
            <div class="bottomnavbar">
                <div class="navtoggle">
                    <a href="">Home</a>
                    <a href="">Dashboard</a>
                    <a href="">Profile</a>
                    <a href="">Setting</a>
                </div>
            </div>
            <Header/>
            <div class="Home-mainpage">
                <div class="Home-firsthalf">
                    <div class="Home-content">
                        <h1 id='frontpage-heading'>Always &nbsp;a &nbsp;ride <br/> where you want</h1>
                        <h2 id='frontpage-subheading'>Self auto service for near travelling</h2>
                        <button id="booknowbtn" onClick={navigateTo}>Book now</button>
                    </div>
                </div>
                <div class="Home-secondhalf"></div>
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