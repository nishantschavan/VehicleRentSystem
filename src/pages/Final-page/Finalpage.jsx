import React, { useState } from "react";
import './Finalpage.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom';

const Finalpage = ()=>{

    const history = useHistory();
    const navigateTo = () => history.push('/');

    const [animation1,setanimation1] = useState({anim:'',lockstr:'none'});
    const [animation2,setanimation2] = useState({anim:'',lockstr:'none'});
    const [animation3,setanimation3] = useState({anim:'',lockstr:'none'});

    const onLock1 = ()=>{
        setanimation1({anim:'anim',lockstr:'none'});
        setTimeout(() => {
            setanimation1({anim:'anim',lockstr:'inline'});
            console.log('hi');
        }, 2000);
    }
    const onLock2 = ()=>{
        setanimation2({anim:'anim',lockstr:'none'});
        setTimeout(() => {
            setanimation2({anim:'anim',lockstr:'inline'});
            console.log('hi');
        }, 2000);
    }
    const onLock3 = ()=>{
        setanimation3({anim:'anim',lockstr:'none'});
        setTimeout(() => {
            setanimation3({anim:'anim',lockstr:'inline'});
            console.log('hi');
        }, 2000);
    }

    return(
        <div className="page">
            <h4 id="gotohome" onClick={navigateTo}><ArrowBackIcon className="mui-icon"/>Go to home</h4>
            <div className="block">
                <div className="info-block">
                    <h2>Scan QR Code</h2>
                    <p>Scan qr code to identify vehicle. 
                        Click on verify button to start process.</p>
                </div>
                <div className="button-block">
                    <button id="nextbtn" onClick={onLock1}>Scan</button>
                </div>
                <div className="circle-block">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <h2 style={{display:animation1.lockstr}}>Locked !</h2>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{animationName:animation1.anim}}/>
                        </svg>
                    </div>
                </div>
            </div>

                <div className="block">
                    <div className="info-block">
                        <h2>Lock the vehicle</h2>
                        <p>Adjust lock system on vehicle and press lock button.
                            Please check lock before leaving vehicle.</p>
                    </div>
                    <div className="button-block">
                        <button id="nextbtn" onClick={onLock2}>Lock</button>
                    </div>
                    <div className="circle-block">
                        <div className="outer-circle">
                            <div className="inner-circle">
                                <h2 style={{display:animation2.lockstr}}>Locked !</h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{animationName:animation2.anim}}/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="info-block">
                        <h2>Refund Deposit amount</h2>
                        <p>Click on Refund button to get refund amount on your account.</p>
                    </div>
                    <div className="button-block">
                        <button id="nextbtn" onClick={onLock3}>Lock</button>
                    </div>
                    <div className="circle-block">
                        <div className="outer-circle">
                            <div className="inner-circle">
                                <h2 style={{display:animation3.lockstr}}>Locked !</h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{animationName:animation3.anim}}/>
                            </svg>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Finalpage