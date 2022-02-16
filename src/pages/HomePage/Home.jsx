import React from "react";
import "./Home.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import Header from "../../Components/Header/header";
import { useHistory } from "react-router-dom";
import { ReactBasicScroll } from "react-basic-scroll";
import { RellaxWrapper } from "react-rellax-wrapper";
import blockIcon from "../../Images/blockchain.png";
import ScootorImg from "../../Images/titleimg3.png";

const Home = () => {
  const history = useHistory();
  const navigateTo = () => history.push("/Booknowpage1");

  const config = {
    from: "top-bottom",
    to: "middle-bottom",
    props: {
      "--width": {
        from: "50vw",
        to: "110vw",
      },
    },
  };

  return (
    <>
      <div class="Home-container">
        <div class="bottomnavbar">
          <div class="navtoggle">
            <a href="">Home</a>
            <a href="">Dashboard</a>
            <a href="">Profile</a>
            <a href="">Setting</a>
          </div>
        </div>
        <Header />
        <div class="Home-mainpage">
          <div class="Home-firsthalf">
            <div class="Home-content">
              <div className="label-1" id="frontpage-heading">
                Always a ride <br /> where you want
              </div>
              <div className="label-2" id="frontpage-subheading">
                Self auto service for near travelling
              </div>
              <button className="book-now-btn" onClick={navigateTo}>
                Book now
              </button>
            </div>
          </div>
          <div class="Home-secondhalf">
            <img src={ScootorImg} alt="Scooter" />
          </div>
        </div>
        <div class="sharetab">
          <h4>Share</h4>
          <FacebookIcon />
          <WhatsAppIcon />
          <InstagramIcon />
          <TwitterIcon />
          <MailIcon />
        </div>
      </div>

      {/* <RellaxWrapper speed={-2} zIndex={2}> */}
      <div className="blockchain-heading">
        <img src={blockIcon} alt="icon" />
        <h1>Blockchain Secured Transactions</h1>
        <h3>Follow below steps to get easily use Application</h3>
      </div>
      {/* </RellaxWrapper> */}

      <div className="blockchain-container">
        <div className="stepsdiv" id="stepsdiv1">
          <RellaxWrapper speed={3} zIndex={2}>
            <div className="indiv">
              <h1 id="number">1: </h1>
              <div className="info">
                <h2>Book your locations</h2>
                <h4>Start location</h4>
                <h4>End location</h4>
              </div>
            </div>
          </RellaxWrapper>
        </div>

        <div className="stepsdiv" id="stepsdiv2">
          <RellaxWrapper speed={3} zIndex={2}>
            <div className="indiv">
              <h1 id="number">2: </h1>
              <div className="info">
                <h2>Scan vehicle QR code</h2>
                <h4>Scan and unlock</h4>
              </div>
            </div>
          </RellaxWrapper>
        </div>

        <div className="stepsdiv" id="stepsdiv3">
          <RellaxWrapper speed={3} zIndex={2}>
            <div className="indiv">
              <h1 id="number">3: </h1>
              <div className="info">
                <h2>Deposit some amount</h2>
                <h4>It will return after ride completion</h4>
              </div>
            </div>
          </RellaxWrapper>
        </div>

        <div className="stepsdiv" id="stepsdiv4">
          <RellaxWrapper speed={3} zIndex={2}>
            <div className="indiv">
              <h1 id="number">4: </h1>
              <div className="info">
                <h2>Park vehicle on stand</h2>
                <h4>Lock vehicle neatly.</h4>
                <h4>Get deposit back</h4>
              </div>
            </div>
          </RellaxWrapper>
        </div>

        <ReactBasicScroll config={config}>
          <div
            className="image-content"
            style={{ width: "var(--width)" }}
          ></div>
        </ReactBasicScroll>
      </div>
      <div className="projectmember"></div>
    </>
  );
};

export default Home;
