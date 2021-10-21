import React from "react";
import { useHistory } from "react-router-dom";
import "./Homepage.scss";
import Scooty from "../../Images/scooty-gif.gif";

const Homepage = () => {
  const history = useHistory();
  const handleRoute = () => {
    history.push("/secondpage");
  };

  return (
    <>
      <div className="Home_page">
        <img src={Scooty} alt="" />

        <div className="secondhalf">
          <div className="row">
            <h1 className="display-4">
              TAKE VEHICLE ON RENT FROM
              <p style={{ color: "red" }}>10</p>{" "}
              <p>
                <h4> Only 100.0 unit of cryptocurrency </h4>
              </p>
            </h1>
          </div>

          <form action="" className="transaction_form">
            <div className="row">
              <input
                type="text"
                id="sender"
                placeholder="Enter address"
              ></input>
            </div>
            <div className="row">
              <input type="text" placeholder="100.0"></input>
            </div>
            <div className="row">
              <button onClick={handleRoute}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Homepage;
