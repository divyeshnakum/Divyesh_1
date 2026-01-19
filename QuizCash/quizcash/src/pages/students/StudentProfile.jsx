// StudentProfile.jsx
import React from "react";
import EmailIcon from "../../assets/icons/email-icon.png";
import CallIcon from "../../assets/icons/call-icon.png";
import ImgStudentPro4 from "../../assets/images/image-student-p4.png";
import BackIcon from "../../assets/icons/back-arrow-icon.png";student-payment-img
import {
  bgCartColor,
  bgColor,
  GreenSuccessCol,
  borderColor,
  textColSecondary,
  textColPrimary,
} from "../../components/ColorLayout";
import ReusableTableCard from "../../components/ReusableTableCard";
import Blog from "../../components/Blog";

const StudentProfile = ({ student, onBack }) => {
  if (!student) return null;

  const bggray = "bg-gray-300";
  // ✅ Table Columns
  const columns = [
    { label: "Sr No.", key: "index" },
    { label: "Quiz Title", key: "title" },
    { label: "Attempts", key: "attempts" },
    { label: "Status", key: "status" },
    { label: "Score", key: "score" },
    { label: "Transaction", key: "transaction" },
  ];

  // ✅ Table Data
  const quizzes = [
    {
      title: "Monthly GK Quiz",
      attempts: 5,
      status: "Attempted",
      score: "120pt",
      transaction: "Success",
    },
    {
      title: "Science Basics",
      attempts: 20,
      status: "Skip",
      score: "0pt",
      transaction: "Faild",
    },
    {
      title: "Coding Basics",
      attempts: 103,
      status: "Notify",
      score: "0pt",
      transaction: "-",
    },
    {
      title: "C++ Aptitude",
      attempts: 97,
      status: "Notify",
      score: "0pt",
      transaction: "-",
    },
  ];

  // ✅ Status Colors
  const statusColorMap = {
    Live: "text-red-500 border-red-600 w-full",
    Upcoming: "text-yellow-500 border-yellow-600 w-full",
    Expired: "text-gray-500 border-gray-600 w-full",
    Draft: "text-green-500 border-green-600 w-full",
  };

  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={` max-w-7xl mx-auto`}>
      {/* Back Button */}
      <button
        onClick={onBack}
        className={` ${textColPrimary} font-semibold flex items-center group mb-4 `}
      >
        <span>
          <img
            src={BackIcon}
            alt=""
            className="h-4 w-2.5 group-hover:w-3 group-hover:h-4.5"
          />
        </span>
        <span className={`${textColPrimary} ml-2    `}>
          Back to Student Listwadaszd
        </span>
      </button>

      {/* Profile Card */}
      <div
        className={`${bgCartColor} border ${borderColor}  rounded-2xl p-4 mb-4 flex flex-col md:flex-row  md:justify-between gap-4`}
      >
        <div className="flex items-center pl-4 gap-8">
          <div
            className={`w-20 h-20 rounded-full ${bggray}  flex items-center justify-center text-2xl font-bold text-gray-700`}
          >
            {student.image ? (
              <img
                src={student.image}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full  flex items-center justify-center text-xl font-semibold">
                {initials}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              {student.name}
            </h2>
            <p className={`${textColSecondary}`}>{student.course}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {student.skills?.map((skill) => (
                <span
                  key={skill}
                  className={`px-2  ${bggray} ${textColPrimary} rounded-full text-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div
              className={`flex flex-col sm:flex-row sm:items-center gap-4 text-sm mt-2 ${textColSecondary}`}
            >
              <span className="flex items-center gap-2">
                <img src={EmailIcon} className="w-4 h-4" /> {student.email}
              </span>
              <span className="flex items-center gap-2">
                <img src={CallIcon} className="w-4 h-4" /> {student.phone}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start">
          <span
            className={`px-3 py-1 ${GreenSuccessCol} rounded-full font-medium`}
          >
            {student.status}
          </span>
        </div>
      </div>

      {/* Stats */}

      {/* Blog */}
      <Blog  hideExtras/>

      {/* Quiz Report */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`  overflow-x-auto md:col-span-2`}>
          <ReusableTableCard
            title="Recent Quiz"
            viewAllLink="/quizzes"
            columns={columns}
            data={quizzes}
            statusColorMap={statusColorMap}
          />
        </div>

        {/* Support / Help Tickets */}
        <div
          className={`${bgCartColor} border ${borderColor} rounded-2xl p-4 flex flex-col items-center justify-center`}
        >
          <img
            src={ImgStudentPro4}
            alt="No complaints"
            className="w-full h-full mb-2"
          />
          <p className="text-gray-500 text-center">
            Ooops! Currently no have any complaint
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
