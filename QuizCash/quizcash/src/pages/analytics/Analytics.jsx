import Blog from "../../components/Blog";
import DashboardStats from "../../components/DashboardStats";
import { useNavigate } from "react-router-dom";
import AnalyticsProfilePage from "./AnalyticsProfilePage";
import { useState } from "react";
const Analytics = () => {
  // const navigate = useNavigate();
  // const [showProfile, setShowProfile] = useState(false);

  // const goToProfile = () => {
  //   setShowProfile(true); // Show the component when button is clicked
  // };
  // function to open modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <DashboardStats
        title="Analytics"
        buttonText="Refresh"
        showButton={false}
        extraButton={true}
        extraButtonText="Export"
        onButtonClick={handleOpenModal}
      ></DashboardStats>
      <Blog />
      {/* <div>
        <button onClick={goToProfile} className="bg-red border p-4">
          Click to profile
        </button>
        {showProfile && <AnalyticsProfilePage />}
      </div> */}
    </>
  );
};
export default Analytics;
