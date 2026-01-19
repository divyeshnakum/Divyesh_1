import React from "react";
import OtpBoxUI from "../components/OtpLayout";
import Header from "../HeaderLogin";
const ForgotValidation = () => {
  return (
    <>
    <Header />
      <OtpBoxUI
        title="Verification"
        subtitle="Enter OTP and verify your account"
        buttonText="Verify"
        timer="00:45"
        footTitle="Didn't Receive Code?"
        footSubtitle="Resent"
        showPasswordFields={false} // new prop to show password inputs
      />
    </>
  );
};

export default ForgotValidation;
