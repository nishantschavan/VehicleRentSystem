import React, { useCallback, useState } from "react";
import './header.scss';
import { useHistory } from "react-router-dom";
import LoginForm from "../Log-in/LoginForm";
import Home from "../../pages/HomePage/Home";
import ReactDOM from "react-dom";

const Header = () =>{

    const [issignbtn,setissignbtn]= useState({Issignbtn:true,btnclass:"signinbtn"});
    const [btntxt,setbtntxt] = useState('Sign in');

    const history = useHistory();
    const navigateTo = () => history.push('/signIn');

    const [Overlay,SetOverlay] = useState(false);

    const openSignOverlay = ()=>{
        SetOverlay(!Overlay);
    }

    const changesignbtn = ()=>{
         console.log("it's working");
        setissignbtn({Issignbtn:false,btnclass:"profilebtn"});
    }

    const profilefunc = useCallback((profile)=>{
        const uppertxt = profile.emailId[0].toUpperCase(); 
        setbtntxt(uppertxt);
    })

    return (
        <div class="header">
            <div class="navbar">
                <a href="">Home</a>
                <a href="">Dashboard</a>
                <a href="">Profile</a>
                <button id={issignbtn.btnclass} onClick={openSignOverlay}>{btntxt}</button>
                <LoginForm open={Overlay} onchange={profilefunc} getprofile={changesignbtn}></LoginForm>
            </div>
        </div>
    )
}

export default Header