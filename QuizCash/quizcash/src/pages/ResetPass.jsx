import React from "react";
import OtpBoxUI from "../components/OtpLayout";
import Header from "../HeaderLogin";

const ResetPass = () => {
  
  return (
    <>
    <Header />
    <OtpBoxUI
      title="Reset Password"
      buttonText="Reset Password"
      subtitle="Enter your new password to continue"
      footTitle="Make sure password contain least 8 digits alphabets numerical."
      showPasswordFields={true} // Show password inputs
    />
</>
  );
};

export default ResetPass;
