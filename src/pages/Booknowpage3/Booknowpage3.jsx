import React,{useState} from "react";
import Header from "../../Components/Header/header";
import Depositamtimg from '../../Images/Depositamount.gif';
import './Booknowpage3.scss';
import '../pages.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stepsbar from "../../Components/Stepsbar/Stepsbar";
import {useHistory} from 'react-router-dom';
import {userAction} from "../../Redux/user-reducer/user.action";
import { useDispatch, useSelector } from "react-redux";

const Booknowpage3 = ()=>{
    const dispatch = useDispatch();

const [amount, setAmount] = useState(0)
    const [bgcolor,setbgcolor] = useState("nextbtn");
    const [appearbtn,setappearbtn] = useState("bappearbtn")
    const userData = useSelector(state => state.loginIn.userData.data.public_key)
    const receiver = "147724472093910127954865156365747626995471013095372676384363921213046948447349582032527183384516495024879482066923411227740506302947448844969261855935411110651574088243995038775660080283850310681565181367568848471059009702867568191511341561592227995987136782018921242955664788555589953715914614587384660299433,65537,15191251959609187288887402861390605797274469273177962868187751148440268994017310955768755854249491405163118076659449318237898320471097723281052539452167523932057006797563567133978126790707730445234557949949010297298489536169511536347010308958915531350388300941031912341929798365518107817266563565328724088143"
    const changecolor = ()=>{
        setbgcolor("sendbtn");
        setappearbtn("appearbtn");
        dispatch(userAction({
            "sender" : userData,
            "receiver" : receiver,
            "amount" : amount,

        }))
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        setAmount(e.target.value)
    }
    console.log("amount", amount)
    const history = useHistory();
    const navigateTo = () => history.push('/Booknowpage4');

    return(
        <div className="container">
            <Header/>
            <Stepsbar activesteps={3}/>
            <div className="mainpage">
                <div className="firsthalf">
                    <div className="content">
                        <h2>Deposit Amount</h2>
                        <textarea id="textbox" placeholder="Your wallet ID : 131812932424115980156563&#10;2470767622499467049817123415067385317490567947488" disabled/>
                        <input type="text" id="textbox" placeholder="Enter 100 units Deposit" onChange={(e) => handleChange(e)}/>
                        <div className="btnflex">
                            <button className="nextbtn" onClick={changecolor}>Send</button>
                            <button className={appearbtn} onClick={navigateTo}>Next</button>
                        </div>
                    </div>
                </div>
                <div className="booknowpage3-secondhalf"></div>
            </div>
        </div>
        
    );
};

export default Booknowpage3