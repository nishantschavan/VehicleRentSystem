import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReactMapGL from 'react-map-gl';
import './Booknowpage1.scss';
import Header from "../../Components/Header/header";
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import {useHistory} from 'react-router-dom';

const Booknowpage1 = () => {

    const [viewport, setViewport] = React.useState({
        latitude: 18.990713,
        longitude: 73.116844,
        zoom: 8,
    });

    const history = useHistory();
    const navigateTo = () => history.push('/Booknowpage2');

    return (
        <div className="container">
            <Header />
            <Stepsbar/>
            <div className="mainpage">
                <div className="firsthalf">
                    <div className="content">
                        <h2>Select Vehicle and Destination</h2>
                        <input type="text" id="textbox" placeholder="Enter Destination" />
                        <button id="nextbtn" onClick={navigateTo}><h3>Next</h3><ArrowForwardIcon /> </button>
                    </div>
                </div>
                <div className="booknowpage1-secondhalf">
                    <ReactMapGL
                        {...viewport}
                        width="40vw"
                        height="300px"
                        mapStyle={"mapbox://styles/nishant16032001/ckywn84jc000514o50tkgi2t3"}
                        mapboxApiAccessToken={"pk.eyJ1IjoibmlzaGFudDE2MDMyMDAxIiwiYSI6ImNreXdscTZxczA5amsyb214M2IyNTJncDgifQ.9pqNKAyLr2ohkchwzMR5Yg"}
                        onViewportChange={(viewport) => setViewport(viewport)}
                    >
                    </ReactMapGL>
                </div>

            </div>
        </div>
    )
}

export default Booknowpage1