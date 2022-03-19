import React, { useState } from "react";
import { Popup } from "react-map-gl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";
import "./Booknowpage1.scss";
import Header from "../../Components/Header/header";
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import { useHistory } from "react-router-dom";
import * as locations from "../../locations.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Booknowpage1 = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 19.106021241115698,
    longitude: 73.00751966822808,
    zoom: 8,
  });

  const [selectPark, setSelectPark] = useState(null);
  const [selectStartTextbox, setSelectStartTextbox] = useState(null);
  const [isStart, setisStart] = useState(false);
  const [selectEndTextbox, setSelectEndTextbox] = useState(null);
  const [isEnd, setisEnd] = useState(false);

  const history = useHistory();
  const navigateTo = () => history.push("/Booknowpage2");

  const handlestartclick = () => {
    setisStart(true);
  };

  const handleendclick = () => {
    setisEnd(true);
  };

  return (
    <div className="container">
      <Header />
      <Stepsbar activesteps={1} />
      <div className="mainpage">
        <div className="firsthalf">
          <div className="content">
            <h2>Select Vehicle and Destination</h2>
            <input
              type="text"
              className="textbox"
              placeholder="Start Destination"
              onClick={handlestartclick}
              value={selectStartTextbox}
            ></input>
            <input
              type="text"
              className="textbox"
              placeholder="End Destination"
              onClick={handleendclick}
              value={selectEndTextbox}
            ></input>
            <button id="nextbtn" onClick={navigateTo}>
              <h3>Next</h3>
              <ArrowForwardIcon />{" "}
            </button>
          </div>
        </div>
        <div className="booknowpage1-secondhalf">
          <div className="reactmap">
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle={
                "mapbox://styles/nishant16032001/ckywn84jc000514o50tkgi2t3"
              }
              mapboxApiAccessToken={process.env.React_App_MAPBOX_TOKEN}
              onViewportChange={(viewport) => setViewport(viewport)}
              onClick={(e) => console.log(e.lngLat[0], e.lngLat[1])}
            >
              {locations.markedlocations.map((mark) => (
                <Marker latitude={mark.latitude} longitude={mark.longitude}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectPark(mark);
                      if (isStart === true) {
                        setSelectStartTextbox(mark.name);
                        setisStart(false);
                      }
                      if (isEnd === true) {
                        setSelectEndTextbox(mark.name);
                        setisEnd(false);
                      }
                    }}
                  >
                    <DeliveryDiningIcon />
                  </button>
                </Marker>
              ))}

              {selectPark ? (
                <Popup
                  latitude={selectPark.latitude}
                  longitude={selectPark.longitude}
                  onClose={() => {
                    setSelectPark(null);
                  }}
                >
                  <div>
                    <h5>{selectPark.name}</h5>
                  </div>
                </Popup>
              ) : null}
            </ReactMapGL>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknowpage1;
