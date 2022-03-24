import React from 'react'
import './Home.scss';
import Header from '../../Components/Header/header';
import { useHistory } from 'react-router-dom';
import {ReactBasicScroll} from "react-basic-scroll";
import { RellaxWrapper } from 'react-rellax-wrapper'
import blockicon from '../../Images/blockchain.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useSelector } from 'react-redux';


const Home = ()=>{

    const loginstate = useSelector(state => state.loginIn)

    const history = useHistory();
    const navigateTo = () => {if(loginstate.loginStatus) history.push('/Booknowpage1')};

    const config = {
        from: 'top-bottom',
        to: 'middle-bottom',
        props: {
            '--width': {
                from: '50vw',
                to: '110vw'
            },
        }
    };

    return(
        <>
        <div className="Home-container">
            <div className="bottomnavbar">
                <div className="navtoggle">
                    <a href="">Home</a>
                    <a href="">Dashboard</a>
                    <a href="">Profile</a>
                    <a href="">Setting</a>
                </div>
            </div>
            <Header/>
            <div className="Home-mainpage">
                <div className="Home-firsthalf">
                    <div className="Home-content">
                        <h1 id='frontpage-heading'>Always &nbsp;a &nbsp;ride <br/> where you want</h1>
                        <h2 id='frontpage-subheading'>Self auto service for near travelling</h2>
                        <button id="booknowbtn" onClick={navigateTo}>Book now</button>
                    </div>
                </div>
                <div className="Home-secondhalf"></div>
            </div>
            <div className="sharetab">
                <h4>Share</h4>
                <WhatsAppIcon className="mui-icon" />
                <FacebookIcon className="mui-icon" />
                <TwitterIcon className="mui-icon" />
                <InstagramIcon className="mui-icon" />
                <MailIcon className="mui-icon" />
            </div>
        </div>

        {/* <RellaxWrapper speed={-5} zIndex={2}> */}
                <div className="blockchain-heading">
                    <img src={blockicon} alt="" />
                    <h1>Blockchain Secured Transactions</h1>
                    <h3>Follow things offered by our platform by using blockchain to users</h3>
                </div>
        {/* </RellaxWrapper> */}

        <div className="blockchain-container">

            <div className="stepsdiv" id='stepsdiv1'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>1: </h1>
                        <div className="info">
                            <h2>Enhanced Security</h2>
                            <p>Blockchain technology utilizes advanced security compared to other platforms or record-keeping systems.
                                <br /> Any transactions that are ever recorded needs to be agreed upon according to the consensus method. 
                                <br /> Also, each transaction is encrypted and has a proper link to the old transaction using a hashing method.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <div className="stepsdiv" id='stepsdiv2'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>2: </h1>
                        <div className="info">
                            <h2>Reduced costs</h2>
                            <p>By using blockchain, organizations can bring down a lot of costs associated with 3rd party vendors.
                                <br /> As blockchain has no inherited centralized player, there is no need to pay for any vendor costs.
                                <br /> On top of that, there is less interaction needed when it comes to validating a transaction,
                                <br /> further removing the need to spend money or time to do basic stuff.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <div className="stepsdiv" id='stepsdiv3'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>3: </h1>
                        <div className="info">
                            <h2>Better transparancy</h2>
                            <p>With blockchain, an organization can go for a complete decentralized network where
                                <br /> there is no need for a centralized authority, improving the system’s transparency.
                                <br /> A blockchain consists of peers who are responsible for carrying out transactions and validating them.</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <div className="stepsdiv" id='stepsdiv4'>
                <RellaxWrapper speed={3} zIndex={2}>
                    <div className='indiv'>
                        <h1 id='number'>4: </h1>
                        <div className="info">
                            <h2>Consensus mechanism</h2>
                            <p>Consensus algorithms in blockchain are what that makes all the blockchain consensus sequences
                                <br /> different from one another.
                                <br /> Blockchain network facilitates millions and millions of people in the same space.
                                <br /> So, how come they never interfere with one another or exist mutually</p>
                        </div>
                    </div>
                </RellaxWrapper>
            </div>

            <ReactBasicScroll config={config}>
                <div className="image-content" style={{width:'var(--width)'}}></div>
            </ReactBasicScroll>
            
        </div>

        <div className="projectmember">
            <div className="projectmember-heading">
                <h1>Meet Our Team</h1>
            </div>
        
            <div className="row">
                <div className="cards">
                    <div className="rectphoto" id='akshatphoto'></div>
                    <h2>Akshat Shirsat</h2>
                    <h3>(Group Leader)</h3>
                    <h4>akshatshirsat77@gmail.com</h4>
                    <h5><GitHubIcon className="mui-icon" /><a href="https://github.com/kingakshat" style={{color:"white"}}>/kingakshat</a></h5>
                    <h5><LinkedInIcon className="mui-icon" /><a href="https://www.linkedin.com/in/akshat-shirsat/" style={{color:"white"}}>/in/akshat-shirsat/</a></h5>
                </div>
                <div className="cards">
                    <div className="rectphoto" id='nishantphoto'></div>
                    <h2>Nishant Chavan</h2>
                    <h3></h3>
                    <h4>nishantscg@gmail.com</h4>
                    <h5><GitHubIcon className="mui-icon" /><a href="https://github.com/nishantschavan" style={{color:"white"}}>/nishantschavan</a></h5>
                    <h5><LinkedInIcon className="mui-icon" /><a href="https://www.linkedin.com/in/nishant-chavan-6baa761a9/" style={{color:"white"}}>/in/nishant-chavan/</a></h5>
                </div>
                <div className="cards">
                    <div className="rectphoto" id='rahulphoto'></div>
                    <h2>Rahul Chakravorty</h2>
                    <h3></h3>
                    <h4>rahulchakravorty01@gmail.com</h4>
                    <h5><GitHubIcon className="mui-icon" /><a href="https://github.com/RahulChakravorty" style={{color:"white"}}>/RahulChakravorty</a></h5>
                    <h5><LinkedInIcon className="mui-icon" /><a href="https://www.linkedin.com/in/rahul-chakravorty-6540ba215" style={{color:"white"}}>/in/rahul-chakravorty-6540ba215</a></h5>
                </div>
                <div className="cards">
                    <div className="rectphoto" id='giribabuphoto'></div>
                    <h2>Giribabu Anisetti</h2>
                    <h5>Website : <a href="http://giribabuanisetti.codes/" style={{color:"white"}}>giribabuanisetti.codes/</a></h5>
                    <h4>girianisetty@gmail.com</h4>
                    <h5><GitHubIcon className="mui-icon" /><a href="https://github.com/iamgiribabu" style={{color:"white"}}>/iamgiribabu</a></h5>
                    <h5><LinkedInIcon className="mui-icon" /><a href="https://www.linkedin.com/in/giribabu-anisetti-208863154/" style={{color:"white"}}>/in/giribabu-anisetti-208863154/</a></h5>
                </div>
            </div>

            <div className="more-details">
                <h4>Project Guide : Mr. Vaibhav palav sir</h4>
                <h5>Project source code : <a href="https://github.com/R-A-N-G">https://github.com/R-A-N-G</a></h5>
                <h5 id='footer'>LTCE College Final year Bachelor of Engineering project (batch 21-22)</h5>
            </div>
        </div>
        </>
    )
}

export default Home