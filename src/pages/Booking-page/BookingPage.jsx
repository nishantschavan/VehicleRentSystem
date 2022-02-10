import React from "react";
import StepHeader from "../../Components/StepsHeader/StepHeader";
import "./BookingPage.scss";
const BookingPage = () => {
  return (
    <div className="booking-page-container">
      <StepHeader />
      <div className="map-container"></div>
    </div>
  );
};

export default BookingPage;
