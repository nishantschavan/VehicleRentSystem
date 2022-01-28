import React from "react";
import './Stepsbar.scss';

const Stepsbar = ()=>{
    return(
        <div className="Stepsbar">
            <div className="Stepsbar-container">
                <h2>Steps:</h2>
                <div className="circle"><h4>1</h4></div>
                <div className="rectangle"></div>
                <div className="circle"><h4>2</h4></div>
                <div className="rectangle"></div>
                <div className="circle"><h4>3</h4></div>
                <div className="rectangle"></div>
                <div className="circle"><h4>4</h4></div>
                <div className="rectangle"></div>
                <div className="circle"><h4>5</h4></div>
            </div>
        </div>
    )
}

export default Stepsbar