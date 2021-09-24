import React from 'react'
import Statusbar from '../Statusbar/Statusbar'
import Transaction from '../Transaction/Transaction'
import './SecondPage.css';

const SecondPage = () => {
    return (
        <div className="second-page">
            <Statusbar/>
            <Transaction/>
        </div>
    )
}

export default SecondPage
