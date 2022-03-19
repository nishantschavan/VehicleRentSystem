import React, { useState } from "react";
import Header from "../../Components/Header/header";
import Depositamtimg from "../../Images/Depositamount.gif";
import "./Booknowpage3.scss";
import "../pages.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import { useHistory } from "react-router-dom";

const Booknowpage3 = () => {
  const [bgcolor, setbgcolor] = useState("nextbtn");
  const [appearbtn, setappearbtn] = useState("bappearbtn");

  const changecolor = () => {
    setbgcolor("sendbtn");
    setappearbtn("appearbtn");
  };

  const history = useHistory();
  const navigateTo = () => history.push("/Booknowpage4");

  return (
    <div className="container">
      <Header />
      <Stepsbar activesteps={3} />
      <div className="mainpage">
        <div className="firsthalf">
          <div className="content">
            <h2>Deposit Amount</h2>
            <input
              type="text"
              className="textbox"
              placeholder="Enter wallet ID"
            />
            <input
              type="text"
              className="textbox"
              placeholder="100 units Deposit"
            />
            <div className="btnflex">
              <button className={bgcolor} onClick={() => changecolor()}>
                Send
              </button>
              <button className={appearbtn} onClick={() => navigateTo()}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="booknowpage3-secondhalf"></div>
      </div>
    </div>
  );
};

export default Booknowpage3;
