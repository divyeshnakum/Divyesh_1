import { useState } from "react";
import Sidebar from "../components/SideBar";
import HeaderAdmin from "../components/HeaderAdmin";
import DashboardStats from "../components/DashboardStats";
import GraphCard from "../components/GraphCard";
import ReusableTableCard from "../components/ReusableTableCard";
import {
  bgCartColor,
  textColPrimary,
  textColSecondary,
  bgColor,
} from "../components/ColorLayout";
import Student from "./students/Students";
import Blog from "../components/Blog";
import Quizzes from "./quizzes/Quizzes";
import Rewards from "./rewards/Rewards";
import Payment from "./payment/Payment";
import Analytics from "./analytics/Analytics";
import { useNavigate } from "react-router-dom";
import SettingsPage from "./setting/SettingsPage";
import NotificationForm from "./NotificationForm";
import AdminProfilePage from "./AdminProfilePage";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const menuNames = [
    "Dashboard",
    "Students",
    "Quizzes",
    "Rewards",
    "Payments",
    "Analytics",
    "Setting", "Notification","Adminprofile" 
  ];

  const currentPage = menuNames[activeIndex];
  const [isBlur, setisBlur] = useState(false);

  // ✅ Table Columns
  const columns = [
    { label: "Sr No.", key: "index" },
    { label: "Quiz Title", key: "title" },
    { label: "Attempts", key: "attempts" },
    { label: "Status", key: "status", isStatus: true },
  ];

  // ✅ Table Data
  const quizzes = [
    { title: "Monthly GK Quiz", attempts: 5, status: "Live" },
    { title: "Science Basics", attempts: 20, status: "Upcoming" },
    { title: "Coding Basics", attempts: 103, status: "Expired" },
    { title: "C++ Aptitude", attempts: 97, status: "Draft" },
  ];

  // ✅ Status Colors
  const statusColorMap = {
    Live: "text-red-500 border-red-600 cursor-pointer w-25",
    Upcoming: "text-yellow-500 border-yellow-600 cursor-pointer w-25",
    Expired: "text-gray-500 border-gray-600 cursor-pointer w-25",
    Draft: "text-green-500 border-green-600 cursor-pointer w-25",
  };

  return (
    <>
      <div className={`flex flex-col md:flex-row min-h-screen ${bgCartColor}`}>
        {/* Sidebar */}
        {/* Sidebar for desktop */}
        <Sidebar
          className="hidden md:block w-64 flexed-shrink-0"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <Sidebar
              className="fixed inset-y-0 left-0 w-64 bg-white z-50"
              setSidebarOpen={setSidebarOpen}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 gap-4 flex flex-col min-h-screen p-4">
          {/* Header */}
          <div>
            <HeaderAdmin
              onHamburgerClick={() => setSidebarOpen(!sidebarOpen)}
              onProfileClick={() => setActiveIndex(menuNames.indexOf("Adminprofile"))}
              onNotifiClick={() => setActiveIndex(menuNames.indexOf("Notification"))}
            />
          </div>

          {/* Content area */}
          <div className={`${bgColor} relative flex-1 p-4  rounded-2xl `}>
            {/* 🔹 Stats */}
            <div className={`duration-200 ${isBlur ? "blur-sm" : ""}`}>
            {currentPage === "Dashboard" && (
              <>
                <DashboardStats />

                {/* 🔹 Graph + Table */}
                <Blog />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <GraphCard title="Student Activity Graph" />
                   <ReusableTableCard
                  title="Recent Quiz"
                  viewAllLink="/quizzes"
                  columns={columns}
                  data={quizzes}
                  statusColorMap={statusColorMap}
                />
                </div>
              </>
            )}{" "}
            {/* Student page */}
            {currentPage === "Students" && <Student />}
            {currentPage === "Quizzes" && <Quizzes />}
            {currentPage === "Rewards" && <Rewards />}
            {currentPage === "Payments" && <Payment />}
            {currentPage === "Analytics" && <Analytics />}
            {currentPage === "Setting" && <SettingsPage />}
            {currentPage === "Notification" && <NotificationForm isOpen={isBlur}/>}
            {currentPage === "Adminprofile" && <AdminProfilePage isOpen={isBlur}/>}
          </div>
        </div></div>
      </div>
    </>
  );
};

export default Dashboard;
