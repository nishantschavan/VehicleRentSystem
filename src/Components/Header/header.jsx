import React, { useCallback, useEffect, useState } from "react";
import './header.scss';
import { useHistory } from "react-router-dom";
import LoginForm from "../Log-in/LoginForm";
import Home from "../../pages/HomePage/Home";
import ReactDOM from "react-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/login-reducer/login.action";

const Header = () => {


    const loginstate = useSelector(state => state.loginIn)
    const [btntxt, setbtntxt] = useState('Sign in');

    // useEffect(() => {
    //     if (loginstate.loginStatus == true) { setbtntxt(loginstate.loginStatus.toString()); }
    // }, [loginstate.loginStatus]);

    const [issignbtn, setissignbtn] = useState({ Issignbtn: true, btnclass: "signinbtn" });
    const [userlogout, setuserlogout] = useState("none");



    const history = useHistory();
    const navigateTo = (url) => history.push(`/${url}`);

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

    const openuserdata = () => {
        (userlogout == "none") ? setuserlogout("block") : setuserlogout("none");
    }

    const dispatch = useDispatch();
    const logoutfunc = () => {
        dispatch(logoutAction());
        navigateTo('');
    }

    return (
        <div className="header">
            <div className="navbar">
                <a href="#Home-mainpage">Home</a>
                <a href="#blockchain-heading">Technology</a>
                <a href="#projectmember">Contact us</a>
                {
                    !loginstate.loginStatus ?
                        <button id="signinbtn" onClick={openSignOverlay}>{btntxt}</button> :
                        <button id="profilebtn" onClick={openuserdata} >
                            <h4>
                                {loginstate.userData.data.username[0].toUpperCase()}
                            </h4>
                            <KeyboardArrowDownIcon className="mui-icon" />
                        </button>
                }
                <LoginForm open={Overlay} onchange={profilefunc} getprofile={changesignbtn}></LoginForm>
                {!loginstate.loginStatus ? null :
                    <div className="user-info-overlay" style={{ display: userlogout }}>
                        <h4>{loginstate.userData.data.username}</h4>
                        <h4>{loginstate.userData.data.email}</h4>
                        <h4 id="logoutoption" onClick={logoutfunc}>logout<LogoutIcon className="mui-icon" /></h4>
                    </div>
                }
            </div>
            <MenuIcon id="menu" className="mui-icon" onClick={showmenu} />
            <div className="mini-navbar" id="mini-navbar">
                <a href="#Home-mainpage" onClick={showmenu}>Home</a>
                <a href="#blockchain-heading" onClick={showmenu}>Technology</a>
                <a href="#projectmember" onClick={showmenu}>Contact us</a>
            </div>
        </div>
    )
}

export default Header