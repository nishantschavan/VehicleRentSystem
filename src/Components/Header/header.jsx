import React from "react";
import './header.scss';
import { useHistory } from "react-router-dom";

const Header = () =>{
    const history = useHistory();
    const navigateTo = () => history.push('/signIn');

    return (
        <div class="header">
            <div class="navbar">
                <a href="">Home</a>
                <a href="">Dashboard</a>
                <a href="">Profile</a>
                <button id="signinbtn" onClick={navigateTo}>sign in</button>
            </div>
        </div>
    )
}

export default Header