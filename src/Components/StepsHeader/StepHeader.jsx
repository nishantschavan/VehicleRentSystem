import React from "react";
import "./StepHeader.scss";
const StepHeader = () => {
  return (
    <div className="step-container">
      <div className="circle">1</div>
      <div className="dash">
        <hr />
      </div>
      <div className="circle">2</div>
      <div className="dash">
        <hr />
      </div>
      <div className="circle">3</div>
    </div>
  );
};

export default StepHeader;
