import React from "react";
import QrReader from "react-qr-reader";
import './QrCode.scss';
import '../pages.scss';
import { useState } from "react";

const QrCode = () => {

    const [QrResult,setQrResult] = useState('');

    const handleErrorwebcam = (error)=>{
        console.log(error);
    }

    const handleScanwebcam = (result)=>{
        if(result){
            console.log(result);
            setQrResult(result);
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
            <button id="webcam-btn" className="sendbtn">Scan</button>
        </>
    );
};

export default QrCode