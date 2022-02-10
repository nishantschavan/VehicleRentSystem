import React, {useState} from "react";
import './Booknowpage4.scss';
import Header from "../../Components/Header/header";
import Unlockvehicleimg from '../../Images/Unlockvehicle.gif';
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import '../pages.scss';
import {useHistory} from 'react-router-dom';

const Booknowpage4 = () =>{
    const [bgcolor,setbgcolor] = useState("nextbtn");
    const [appearbtn,setappearbtn] = useState("bappearbtn")

    const changecolor = ()=>{
        setbgcolor("sendbtn");
        setappearbtn("appearbtn");
    }

    const history = useHistory();
    const navigateTo = () => history.push('/Booknowpage5');

    return(
        <div className="container">
            <Header/>
            <Stepsbar activesteps={4}/>
            <div className="mainpage">
                <div className="firsthalf">
                    <div className="content">
                        <h2>Unlock vehicle</h2>
                        <h1>Vehicle Unlocked <br/> Sucessfully!</h1>
                        <div className="btnflex">
                            <button className={bgcolor} onClick={changecolor}>Unlock</button>
                            <button className={appearbtn} onClick={navigateTo}>Next</button>
                        </div>
                    </div>
                </div>
                <div className="booknowpage4-secondhalf"></div>
            </div>
        </div>
    );
};

export default Booknowpage4