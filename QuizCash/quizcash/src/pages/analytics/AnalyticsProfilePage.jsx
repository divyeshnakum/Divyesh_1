import ProfileHeader from "../../components/analytics/ProfileHeader";
import PersonalInfo from "../../components/analytics/PersonalInfo";
import SubAdminList from "../../components/analytics/SubAdminList";
const AnalyticsProfilePage = () => {
  return (
    <div className="space-y-6">

      <ProfileHeader
        name="Kapadia Ashish S."
        email="ashishk37@xyz.com"
        role="Super Admin"
        image="https://i.pravatar.cc/150"
        onEdit={() => alert("Edit Profile")}
      />

      <PersonalInfo
        data={[
          { label: "Full Name", value: "Kapadia Ashish S" },
          { label: "Email", value: "ashishk37@xyz.com" },
          { label: "Phone Number", value: "+91 6353635263" },
          { label: "Gender", value: "Male" },
          { label: "Date Joined", value: "15 Jan 2025" },
          { label: "Last Activity", value: "Today 11:45 AM" },
        ]}
      />

      <SubAdminList
        admins={[
          { name: "Olivia Rhye", email: "rhye@email.com", role: "Quiz post", status: "Active" },
          { name: "Phoenix Baker", email: "pone@email.com", role: "Student manage", status: "Inactive" },
          { name: "Drew Cano", email: "drew@email.com", role: "Content manage", status: "Inactive" },
        ]}
        onAdd={() => alert("Add Sub Admin")}
      />

    </div>
  );
};

export default AnalyticsProfilePage;
