import React from 'react'
import './Home.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from '../../Components/Header/header';
import { useHistory } from 'react-router-dom';
import {ReactBasicScroll} from "react-basic-scroll";
import { RellaxWrapper } from 'react-rellax-wrapper'
import blockicon from '../../Images/blockchain.png';

const Home = ()=>{

    const history = useHistory();
    const navigateTo = () => history.push('/Booknowpage1');

    const config = {
        from: 'top-bottom',
        to: 'middle-bottom',
        props: {
            '--width': {
                from: '50vw',
                to: '110vw'
            }
        }
    };

    return(
        <>
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

        {/* <RellaxWrapper speed={-5} zIndex={2}> */}
                <div className="blockchain-heading">
                    <img src={blockicon} alt="" />
                    <h1>Blockchain Secured Transactions</h1>
                    <h3>Follow below steps to get easily use Application</h3>
                </div>
        {/* </RellaxWrapper> */}

        <div className="blockchain-container">

            <div className="stepsdiv" id='stepsdiv1'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>1: </h1>
                        <div className="info">
                            <h2>Book your locations</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                <br /> Doloremque temporibus, amet, tempora sint sequi nam,
                                <br /> praesentium adipisci ex dolores necessitatibus autem at blanditiis voluptatibus quae.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <div className="stepsdiv" id='stepsdiv2'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>2: </h1>
                        <div className="info">
                            <h2>Scan vehicle QR code</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                <br /> Doloremque temporibus, amet, tempora sint sequi nam,
                                <br /> praesentium adipisci ex dolores necessitatibus autem at blanditiis voluptatibus quae.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <div className="stepsdiv" id='stepsdiv3'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>3: </h1>
                        <div className="info">
                            <h2>Deposit some amount</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                <br /> Doloremque temporibus, amet, tempora sint sequi nam,
                                <br /> praesentium adipisci ex dolores necessitatibus autem at blanditiis voluptatibus quae.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <div className="stepsdiv" id='stepsdiv4'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>4: </h1>
                        <div className="info">
                            <h2>Park vehicle on stand</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                <br /> Doloremque temporibus, amet, tempora sint sequi nam,
                                <br /> praesentium adipisci ex dolores necessitatibus autem at blanditiis voluptatibus quae.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <ReactBasicScroll config={config}>
                <div className="image-content" style={{width:'var(--width)'}}></div>
            </ReactBasicScroll>
            
        </div>
        <div className="projectmember">

        </div>
        </>
    )
}

export default Home