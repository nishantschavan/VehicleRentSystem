import React from "react";
import SignUp from "../../Components/Sign-up/SignUp";

const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        width: "100%",
      }}
    >
      <SignUp />
    </div>
  );
};

export default SignUpPage;
