import React, { useEffect, useState } from "react";
import './Stepsbar.scss';

const Stepsbar = ({activesteps})=>{

    useEffect(()=>{
        for(var i=1;i<=activesteps;i++){
            document.getElementById(`circle${i}`).style.opacity = '100%';
            if(i>1){
                document.getElementById(`rect${i-1}`).style.opacity = '100%';
            }
        }
    });
    
    return(
        <div className="Stepsbar">
            <div className="Stepsbar-container">
                <h2>Steps:</h2>
                <div id="circle1" className="circle"><h4>1</h4></div>
                <div id="rect1" className="rectangle"></div>
                <div id="circle2" className="circle"><h4>2</h4></div>
                <div id="rect2" className="rectangle"></div>
                <div id="circle3" className="circle"><h4>3</h4></div>
                <div id="rect3" className="rectangle"></div>
                <div id="circle4" className="circle"><h4>4</h4></div>
                <div id="rect4" className="rectangle"></div>
                <div id="circle5" className="circle"><h4>5</h4></div>
            </div>
        </div>
    )
}

export default Stepsbar