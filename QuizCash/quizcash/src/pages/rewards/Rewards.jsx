// pages/Student.jsx
import React, { useEffect, useState } from "react";
import DashboardStats from "../../components/DashboardStats";
import Blog from "../../components/Blog";
import ReusableTable from "../../components/ReusableTable";
import ExportIcon from "../../assets/icons/export-icon.png";
import {
  bgColor,
  bgCartColor,
  borderColor,
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  TextGray
} from "../../components/ColorLayout";
import SearchIcon from "../../assets/icons/uil_search.png";
import RewardSpend from "./RewardsSpeed";

const Rewards = () => {
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [activeDate, setActiveDate] = useState("month");

  const BaseTextYel = "text-[#FFB800]";
  const HoverTextYel = "hover:text-[#E0A200]";
  const TextGray = "text-[#4B5563]";
  const data = [
    {
      id: 1,
      user: "Alex Johnson",
      quizName: "World History Challenge",
      rewardAmount: "₹10.00",
      upiId: "alex.j@exampleupi",
      status: "Paid",
      date: "Oct 28, 2023",
    },
    {
      id: 2,
      user: "Maria Garcia",
      quizName: "Science & Nature Quiz",
      rewardAmount: "₹5.00",
      upiId: "garciam@samplepay",
      status: "Pending",
      date: "Oct 28, 2023",
    },
    {
      id: 3,
      user: "Sarah Chen",
      quizName: "80s Movie Trivia",
      rewardAmount: "₹15.00",
      upiId: "chen.s@payme",
      status: "Paid",
      date: "Oct 27, 2023",
    },
    {
      id: 4,
      user: "David Miller",
      quizName: "Tech Innovators Quiz",
      rewardAmount: "₹5.00",
      upiId: "david.miller@upi",
      status: "Failed",
      date: "Oct 26, 2023",
    },
  ];

  /* 🔥 NEW: Table column configuration */
  const tableColumns = [
    { label: "USER", key: "user", type: "user", className: "font-bold" },
    { label: "QUIZ NAME", key: "quizName", className: `${TextGray}` },
    { label: "REWARD AMOUNT", key: "rewardAmount", className: "font-bold" },
    { label: "UPI ID", key: "upiId", className: `${TextGray}` },
    { label: "STATUS", key: "status", type: "status" },
    { label: "DATE", key: "date", className: `${TextGray}` },
    { label: "ACTION", type: "action" },
  ];

  const statusColors = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
  };

  // function to open modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  /* 🔥 NEW: Centralized cell renderer */
  const renderCell = (item, col) => {
    if (col.type === "user") {
      return (
        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${bgColor} ${TextGray}`}
          >
            {item.user.charAt(0)}
          </div>
          <span>{item.user}</span>
        </div>
      );
    }

    if (col.type === "status") {
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}
        >
          {item.status}
        </span>
      );
    }

    if (col.type === "action") {
      return <span className={`cursor-pointer ${TextGray} `}>...</span>;
    }

    return item[col.key];
  };

  return (
    <>
      <div className="">
        <div className="relative">
          {/* BLUR ONLY THIS */}
          <div className={`duration-200 ${openModal ? "blur-sm" : ""}`}>
            <DashboardStats
              title="Rewards"
              buttonText="Add new quiz"
              showButton={false}
              onButtonClick={handleOpenModal}
            >
              <Blog hideExtras />

              {/* RewardSpeed */}
              <div className="py-4">
                <RewardSpend />
              </div>
              <>
                {/* Start Table  */}
                <div
                  className={` border rounded-2xl p-4 ${borderColor} ${bgCartColor} "`}
                >
                  <div className="flex flex-col  md:flex-row md:justify-between mb-4 gap-4">
                      <div className="w-full flex items-center sm:max-w-sm">
                        <img
                          src={SearchIcon}
                          className="absolute text-center justify-center ml-3 w-4 h-4"
                        />
                        <input
                          placeholder="Search here"
                          className={`border ${bgColor} ${borderColor} rounded-3xl pl-8 pr-4 py-2 w-full text-sm`}
                        />
                      </div>
                    <div className="flex flex-wrap gap-2">
                      <div
                        className={`flex flex-row gap-2 sm:gap-4 border px-1 sm:px-4 sm:py-1 py-0.5 ${borderColor} rounded-2xl ${bgColor} w-full sm:w-auto`}
                      >
                        <button
                          onClick={() => setActiveDate("today")}
                          className={`flex-1 sm:flex-none text-center px-2 sm:px-3 py-0 sm:py-1 transition-colors duration-200 cursor-pointer ${
                            activeDate === "today"
                              ? `${BaseTextYel} ${bgCartColor} border-transparent rounded-xl`
                              : `${HoverTextYel}`
                          }`}
                        >
                          Today
                        </button>

                        <button
                          onClick={() => setActiveDate("week")}
                          className={`flex-1 sm:flex-none text-center px-3 py-0 sm:py-1 transition-colors duration-200 cursor-pointer ${
                            activeDate === "week"
                              ? `${BaseTextYel} ${bgCartColor} border-transparent rounded-xl`
                              : `${HoverTextYel}`
                          }`}
                        >
                          This Week
                        </button>

                        <button
                          onClick={() => setActiveDate("month")}
                          className={`flex-1 sm:flex-none text-center px-3 py-0 sm:py-1 transition-colors duration-200 cursor-pointer ${
                            activeDate === "month"
                              ? `${BaseTextYel} ${bgCartColor} border-transparent rounded-xl`
                              : `${HoverTextYel}`
                          }`}
                        >
                          This Month
                        </button>
                      </div>
                      <div
                        className={`flex gap-4 border px-4 py-1 ${borderColor} rounded-2xl ${bgColor} `}
                      >
                        <button className="">Custom Range</button>
                      </div>
                      <select
                        className={` border px-4 py-1 ${borderColor} rounded-2xl ${bgColor} `}
                      >
                        <option hidden>Status: All</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Failed</option>
                      </select>
                      <div
                        className={`flex gap-2 px-4 items-center py-2 ${baseColorYel} ${textColPrimary} rounded-2xl ${hoverColorYel}`}
                      >
                        <img
                          src={ExportIcon}
                          alt=""
                          className="w-5 h-6 text-center"
                        />
                        <button className="">Export to CSV</button>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto ">
                    <table className="min-w-full text-left">
                      <thead className={`${bgColor}  ${TextGray}`}>
                        <tr>
                          {tableColumns.map((col) => (
                            <th key={col.label} className="px-6 py-3">
                              {col.label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr
                            key={item.id}
                            className={`${borderColor} ${
                              index !== data.length - 1 ? "border-b" : ""
                            }`}
                          >
                            {/* 🔥 NO MORE MANUAL <td> */}
                            {tableColumns.map((col) => (
                              <td
                                key={col.label}
                                className={`px-6 py-4 ${col.className || ""}`} // 🔥 APPLY STYLE
                              >
                                {renderCell(item, col)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* End Table */}
              </>
            </DashboardStats>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rewards;
