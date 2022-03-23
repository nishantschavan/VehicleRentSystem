import React, { useCallback, useEffect, useState } from "react";
import './header.scss';
import { useHistory } from "react-router-dom";
import LoginForm from "../Log-in/LoginForm";
import Home from "../../pages/HomePage/Home";
import ReactDOM from "react-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";

const Header = () => {

  
  const loginstate = useSelector(state => state.loginIn.loginStatus)
    const [btntxt, setbtntxt] = useState('Sign in');

    // useEffect(() => {
    //     if (loginstate.loginStatus == true) { setbtntxt(loginstate.loginStatus.toString()); }
    // }, [loginstate.loginStatus]);

    const [issignbtn, setissignbtn] = useState({ Issignbtn: true, btnclass: "signinbtn" });



    const history = useHistory();
    const navigateTo = () => history.push('/signIn');

    const [Overlay, SetOverlay] = useState(false);

    const openSignOverlay = () => {
        SetOverlay(!Overlay);
    }

    const changesignbtn = () => {
        console.log("it's working");
        setissignbtn({ Issignbtn: false, btnclass: "profilebtn" });
    }

    const profilefunc = useCallback((profile) => {
        const uppertxt = profile;
        setbtntxt(uppertxt);
    })

    const showmenu = () => {
        const ele = document.getElementById('mini-navbar');
        if (ele.style.height == '100vh') {
            ele.style.height = '0px';
            ele.style.borderTop = 'none';
        }
        else {
            ele.style.height = '100vh';
            ele.style.borderTop = '1px solid #FB4C4C';
        }
    }

    return (
        <div className="header">
            <div className="navbar">
                <a href="">Home</a>
                <a href="">Dashboard</a>
                <a href="">Profile</a>
                {
!loginstate ?
                <button id={issignbtn.btnclass} onClick={openSignOverlay}>{btntxt}</button> :
                <div>user</div>
                }
                <LoginForm open={Overlay} onchange={profilefunc} getprofile={changesignbtn}></LoginForm>
            </div>
            <MenuIcon id="menu" className="mui-icon" onClick={showmenu} />
            <div className="mini-navbar" id="mini-navbar">
                <a href="">Home</a>
                <a href="">Dashboard</a>
                <a href="">Profile</a>
            </div>
        </div>
    )
}

export default Header