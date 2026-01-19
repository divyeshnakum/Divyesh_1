import React, { useState } from "react";
import showIcon from "../assets/icons/fluent_eye-12-filled.png"
import logo_img from "../assets/images/Rectangle-1.png";
import {
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  borderColor,
  bgColor,
  bgCartColor,
} from "./ColorLayout";

const OtpBoxUI = ({
  title,
  subtitle,
  buttonText,
  timer = "00:45",
  footTitle,
  footSubtitle,
  showPasswordFields = false, // new prop to show password inputs
  onSubmit, // function called on button click
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);


//   const handleButtonClick = () => {
//     if (showPasswordFields) {
//       // Password validation
//       if (!newPassword || !confirmPassword) {
//         setError("Both fields are required");
//         return;
//       }
//       if (newPassword !== confirmPassword) {
//         setError("Passwords do not match");
//         return;
//       }
//       setError("");
//       onSubmit && onSubmit({ newPassword, confirmPassword });
//     } else {
//       // For OTP use-case
//       onSubmit && onSubmit();
//     }
//   };

  return (
    <div className="flex justify-center items-center w-full py-24 px-4">
      <div
        className={`w-full max-w-[360px] ${bgCartColor} rounded-2xl ${borderColor}  shadow-sm px-6 py-7 text-center`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo_img} alt="QuizCash" className="h-14" />
        </div>

        {/* Heading */}
        <h2 className={`text-lg font-semibold ${textColPrimary}`}>{title}</h2>
        <p className={`text-sm ${textColSecondary} mt-1 mb-6`}>{subtitle}</p>

        {/* Conditional Inputs */}
        {showPasswordFields ? (
          <>
            <div className="flex flex-col gap-3 mb-4">
              <div className="relative w-full">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`w-full rounded-2xl border ${borderColor} px-4 py-2 text-left text-sm ${textColSecondary} bg-white focus:outline-none`}
                />
                <img
                  src={showIcon}
                  alt="Show password"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              </div>
              <div className="relative w-full">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full rounded-2xl border ${borderColor} px-4 py-2 text-left text-sm ${textColSecondary} bg-white focus:outline-none`}
                />
                <img
                  src={showIcon}
                  alt="Show password"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              </div>
            </div>
            <p className={`text-xs mb-3 ${textColSecondary}`}>{footTitle} </p>
          </>
        ) : (
          <div className="flex justify-center gap-3 mb-4">
            {["1", "2", "5", "-"].map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item}
                disabled
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg border ${borderColor} text-center text-lg font-semibold ${textColSecondary} bg-white focus:outline-none`}
              />
            ))}
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-xs text-red-600 mb-4">{error}</p>}

        {/* Optional Resend & Timer for OTP */}
        {!showPasswordFields && (
          <>
            <p className={`text-xs ${textColSecondary}`}>
              {footTitle}{" "}
              <span className={`${textColPrimary} font-medium cursor-pointer`}>
                {footSubtitle}
              </span>
            </p>
            <p className="text-xs text-red-600 mt-1 mb-5">{timer}</p>
          </>
        )}

        {/* Button */}
        <button
          className={` ${baseColorYel} ${hoverColorYel}  transition text-black font-semibold py-2 px-24 rounded-xl`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default OtpBoxUI;
