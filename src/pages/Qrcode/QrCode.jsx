import React from "react";
import QrReader from "react-qr-reader";
import './QrCode.scss';
import '../pages.scss';
import { useRef,useState } from "react";
import { useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QrCode = () => {

    const history = useHistory();
    const navigateTo = () => {
        if(isfine){
            history.push('/Booknowpage3');
        }
    }

    const [QrResult,setQrResult] = useState('');
    const [pcolor,setpcolor] = useState('green');
    const [isfine,setisfine] = useState(false);

    const handleErrorwebcam = (error)=>{
        console.log(error);
    }

    const handleScanwebcam = (result)=>{
        if(result){
            console.log(result[result.length-1]);
        
            const codeid = "VEHICLE"; 
            if(parseInt(result[result.length -1]) < 5){
                for(var i=0;i<result.length-1;i++){
                    if(result[i]==codeid[i]){
                        setQrResult('Vehicle detected successfully!');
                        setisfine(true);
                    }
                }
            }
            else{ 
                setQrResult('Wrong QR code'); 
                setpcolor('red');
            }
        }
    }

    const [successmsg,setsuccessmsg] = useState('');

    const qrRef = useRef(null);

    const handleError = (error) => {
        console.log(error);
    }

    const handleScan = (result) => {
        console.log('hi');
        console.log(result);
        
        const codeid = "VEHICLE"; 
        if(parseInt(result[result.length -1]) < 4){
            for(var i=0;i<result.length-1;i++){
                if(result[i]==codeid[i]){
                    setsuccessmsg('Vehicle detected successfully!');
                    setisfine(true);
                }
            }
        }
        else{ 
            setsuccessmsg('Wrong QR code');
            setpcolor('red');
        }
    }

    const scanqrfile = () => {
        qrRef.current.openImageDialog();
    }

    return (
        <>
        <div className="mainpage">
            <div className="firsthalf-qrcode">
                <div className="qrcode-bigwrapper">
                    <div className="qrcode-wrapper">
                        <QrReader
                            delay={300}
                            style={{ width: "50%" }}
                            onError={handleErrorwebcam}
                            onScan={handleScanwebcam}
                        />
                    </div>
                </div>
                <button id="nextbtn" className="webcam-btn" onClick={navigateTo}>Next</button>
                <p className="webcam-btn" style={{color:`${pcolor}`}}>{QrResult}</p>
            </div>

            <div className="secondhalf-qrcode">
                <div className="qrcode">
                    <QrReader
                        ref={qrRef}
                        delay={300}
                        // style={{
                        //     width: "75%",
                        // }}
                        width="100%"
                        onError={handleError}
                        onScan={handleScan}
                        legacyMode
                    />
                </div>

                <div className="booknowpage2-btnflex">
                    <button className="sendbtn" onClick={scanqrfile}>choose file</button>
                    <h6>or</h6>
                    {/* <button className="sendbtn" onClick={navigateToScan}>Scan</button> */}
                </div>
                            
                <h4 style={{color:`${pcolor}`}}>{successmsg}</h4>
                <button id="nextbtn" onClick={navigateTo}><h3>Next</h3><ArrowForwardIcon className="mui-icon" /> </button>
            </div>
        </div>
        </>
    );
};

export default QrCode