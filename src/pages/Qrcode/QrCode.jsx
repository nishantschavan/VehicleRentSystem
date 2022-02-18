import React from "react";
import QrReader from "react-qr-reader";
import './QrCode.scss';
import '../pages.scss';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

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

    return (
        <>
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
        </>
    );
};

export default QrCode