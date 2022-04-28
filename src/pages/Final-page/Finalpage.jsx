import React, { useState ,useRef} from "react";
import './Finalpage.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom';
import QrReader from "react-qr-reader";
import { useSelector } from "react-redux";

const Finalpage = ()=>{

    const history = useHistory();
    const navigateTo = () => history.push('/');

    const qrcodstate = useSelector(state => state.Qr)

    const [showloading, setshowloading] = useState(false);

    const [animation1,setanimation1] = useState({anim:'',lockstr:'none'});
    const [animation2,setanimation2] = useState({anim:'',lockstr:'none'});
    const [animation3,setanimation3] = useState({anim:'',lockstr:'none'});

    const qrRef = useRef(null);

    const handleError = (error) => {
        console.log(error);
    }


    const handleScan = (result) => {
        console.log('hi');
        console.log(result);
        setshowloading(false);

        if (result) {
            const codeid = "VEHICLE";
            if (parseInt(result[result.length - 1]) < 5) {
                for (var i = 0; i < result.length - 1; i++) {
                    if (result[i] == codeid[i] && i == result.length-2) {
                        console.log('Vehicle detected successfully!');
                        console.log('Vehicle detected successfully!');
                        // dispatch(qrAction(result));
                        // setisfine(true);
                        (qrcodstate.qrData == result)? 
                            onLock1()
                            :console.log('not done');
                    }
                }
            }
            else {
                console.log('Wrong QR code');
            }
        }
    }

    const scanqrfile = () => {
        qrRef.current.openImageDialog();
    }


    const onLock1 = ()=>{
        setanimation1({anim:'anim',lockstr:'none'});
        setTimeout(() => {
            setanimation1({anim:'anim',lockstr:'inline'});
            console.log('hi');
        }, 2000);
        // setshowloading(true);
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

    const openscanoverlay = ()=>{
        console.log('qrcode')
        setshowloading(true);
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
                    <button id="nextbtn" onClick={openscanoverlay}>Scan</button>
                </div>
                <div className="circle-block">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <h2 style={{display:animation1.lockstr}}>Verified !</h2>
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
                        <button id="nextbtn" onClick={onLock3}>Get</button>
                    </div>
                    <div className="circle-block">
                        <div className="outer-circle">
                            <div className="inner-circle">
                                <h2 style={{display:animation3.lockstr}}>Refunded!</h2>
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

                {showloading ?
                    <div className="overlayqrscandiv">
                        <div className="qrcode">
                            <QrReader
                                ref={qrRef}
                                delay={300}
                                // style={{
                                //     width: "75%",
                                // }}
                                width="50%"
                                onError={handleError}
                                onScan={handleScan}
                                legacyMode={true}
                            />
                            <button onClick={scanqrfile}>Scan</button>
                        </div>
                    </div> : null
                }
        </div>
    )
};

export default Finalpage