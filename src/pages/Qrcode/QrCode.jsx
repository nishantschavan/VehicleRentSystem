import React from "react";
import  QrReader  from "react-qr-reader";
import './QrCode.scss';
import '../pages.scss';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from "react-redux";
import { qrAction } from "../../Redux/qr-reducer/qr.action";

const QrCode = () => {

    const history = useHistory();
    const navigateTo = () => {
        if (isfine) {
            history.push('/Booknowpage3');
        }
    }

    const dispatch = useDispatch();

    const [QrResult, setQrResult] = useState('');
    const [pcolor, setpcolor] = useState('green');
    const [isfine, setisfine] = useState(false);

    const handleErrorwebcam = (error) => {
        console.log(error);
    }

    const handleScanwebcam = (result) => {
        if (result) {
            console.log(result[result.length - 1]);

            const codeid = "VEHICLE";
            if (parseInt(result[result.length - 1]) < 5) {
                for (var i = 0; i < result.length - 1; i++) {
                    if (result[i] == codeid[i] && i == result.length-2) {
                        setQrResult('Vehicle detected successfully!');
                        console.log('Vehicle detected successfully!');
                        dispatch(qrAction(result));
                        setisfine(true);
                    }
                    else{
                        break;
                    }
                }
            }
            else {
                setQrResult('Wrong QR code');
                setpcolor('red');
            }
        }
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
                    <button id="nextbtn" className="webcam-btn" onClick={navigateTo}><h3>Next</h3><ArrowForwardIcon className="mui-icon" /></button>
                    <p className="webcam-btn" style={{ color: `${pcolor}` }}>{QrResult}</p>
                </div>
            </div>
        </>
    );
};

export default QrCode