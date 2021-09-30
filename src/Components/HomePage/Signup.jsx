import React from 'react'
import { useHistory ,NavLink } from "react-router-dom";
import Scooty from "../../Images/scooty-gif.gif";
import "./LoginForm.scss";

const Signup = () => {

    const history = useHistory();
    const handleRoute = () => {
        history.push("/secondpage");
    };

    return (
      <div className="LoginPage">
        <div className="secondhalf">
          <div className="row">
            <h1 className="display-4" >
              Sign up 
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
              <input type="text" placeholder="100.0"></input>
            </div>
            <div className="row">
              <input type="text" placeholder="100.0"></input>
            </div>
            <div className="row">
              <input type="text" placeholder="100.0"></input>
            </div>
            <div className="row">
              <button onClick={handleRoute}>Submit</button>
              <NavLink to="/login" className="dir-link">Don't have an Account ?</NavLink>
            </div>
          </form>
        </div>
        <div className="firsthalf">
            <img src={Scooty} alt="" />
        </div>
      </div>
        
    )
}

export default Signup
