import React from "react";
import OtpBoxUI from "../components/OtpLayout";
import Header from "../HeaderLogin";
import { bgColor } from "../components/ColorLayout";

const ResetPass = () => {
  
  return (
    <>
    <div className={`${bgColor}`}>
    <Header />
    <OtpBoxUI
      title="Reset Password"
      buttonText="Reset Password"
      subtitle="Enter your new password to continue"
      footTitle="Make sure password contain least 8 digits alphabets numerical."
      showPasswordFields={true} // Show password inputs
    /></div>
</>
  );
};

export default ResetPass;
