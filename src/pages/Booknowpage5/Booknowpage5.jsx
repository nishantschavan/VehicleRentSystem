import React from "react";
import './Booknowpage5.scss';
import '../pages.scss';
import Enjoyrideimg from '../../Images/Enjoyride.gif';
import Header from "../../Components/Header/header";
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import {useHistory} from 'react-router-dom';


const Booknowpage5 = ()=> {

    const history = useHistory();
    const navigateTo = () => history.push('/');

    return(
        <div className="container">
            <Header/>
            <Stepsbar/>
            <div className="mainpage">
                <div className="firsthalf">
                    <div className="content">
                        <h1>Enjoy your Ride !</h1>
                        <button className="sendbtn" onClick={navigateTo}>Go to home</button>
                    </div>
                </div>
                <div className="booknowpage5-secondhalf"></div>
            </div>
        </div>
    );
};

export default Booknowpage5