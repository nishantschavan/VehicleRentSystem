import React from "react";
import './booknowpage2.scss';
import '../pages.scss';
import Header from "../../Components/Header/header";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import {useHistory} from 'react-router-dom';

const Booknowpage2 = ()=>{

    const history = useHistory();
    const navigateTo = () => history.push('/Booknowpage3');

    return(
        <div className="container">
            <Header/>
            <Stepsbar/>
            <div className="mainpage">
                <div className="firsthalf">
                    <div className="content">
                        <h2>Scan QR code</h2>
                        <select name="vehicle codes" id="vehiclecode">
                            <option value="#12545">Vehicle code</option>
                            <option value="#12545">#12545</option>
                            <option value="#12545">#12545</option>
                            <option value="#12545">#12545</option>
                        </select>
                        <h4>Vehicle detected successfully!</h4>
                        <button id="nextbtn" onClick={navigateTo}><h3>Next</h3><ArrowForwardIcon/> </button>
                    </div>
                </div>
                <div className="booknowpage2-secondhalf">
                    <p>Scan QR code place on Vehicle which you want to take.
                       <br/>System will detect vehicle automatically.</p>
                </div>
            </div>
        </div>
    );
};

export default Booknowpage2