import Blog from "../../components/Blog";
import DashboardStats from "../../components/DashboardStats";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/analyticsProfilePage"); // this will go to Profile component
  };
  return (
    <>
      <DashboardStats
        title="Analytics"
        buttonText="Refresh"
        showButton={false}
        extraButton={true}
        extraButtonText="Export"
      ></DashboardStats>
      <Blog />
      <div>
        <button onClick={goToProfile} className="bg-red border p-4">
          Click to profile
        </button>
      </div>
    </>
  );
};
export default Analytics;
