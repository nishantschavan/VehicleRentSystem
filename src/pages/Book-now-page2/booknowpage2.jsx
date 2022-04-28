import React, { useRef, useState } from "react";
import './booknowpage2.scss';
import '../pages.scss';
import Header from "../../Components/Header/header";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import { useHistory } from 'react-router-dom';
import QrReader from "react-qr-reader";
import { qrAction } from "../../Redux/qr-reducer/qr.action";
import { useDispatch } from "react-redux";

const Booknowpage2 = () => {

    const history = useHistory();
    const navigateTo = () => {
        if (isfine) {
            history.push('/Booknowpage3');
        }
    }

    const dispatch = useDispatch();

    const [successmsg, setsuccessmsg] = useState('');
    const [pcolor, setpcolor] = useState('green');
    const [isfine, setisfine] = useState(false);

    const qrRef = useRef(null);

    const handleError = (error) => {
        console.log(error);
    }


    const handleScan = (result) => {
        console.log('hi');
        console.log(result);

        if (result) {
            const codeid = "VEHICLE";
            if (parseInt(result[result.length - 1]) < 5) {
                for (var i = 0; i < result.length - 1; i++) {
                    if (result[i] == codeid[i] && i == result.length-2) {
                        setsuccessmsg('Vehicle detected successfully!');
                        console.log('Vehicle detected successfully!');
                        dispatch(qrAction(result));
                        setisfine(true);
                    }
                }
            }
            else {
                setsuccessmsg('Wrong QR code');
                setpcolor('red');
            }
        }
    }

    const scanqrfile = () => {
        qrRef.current.openImageDialog();
    }

    const navigateToScan = () => {
        history.push('/scanqr');
    }

    return (
        <div className="container">
            <Header />
            <Stepsbar activesteps={2} />
            <div className="mainpage">
                <div className="firsthalf">
                    <div className="content">
                        <h2>Scan QR code</h2>

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
                                legacyMode={true}
                            />
                        </div>

                        <div className="booknowpage2-btnflex">
                            <button className="sendbtn" onClick={scanqrfile}>choose file</button>
                            <h6>or</h6>
                            <button className="sendbtn" onClick={navigateToScan}>Scan</button>
                        </div>

                        <h4 style={{ color: `${pcolor}` }}>{successmsg}</h4>
                        <button id="nextbtn" onClick={navigateTo}><h3>Next</h3><ArrowForwardIcon className="mui-icon" /> </button>
                    </div>
                </div>
                <div className="booknowpage2-secondhalf">
                    <p>Scan QR code place on Vehicle which you want to take.</p>
                </div>
            </div>
        </div>
    );
};

export default Booknowpage2