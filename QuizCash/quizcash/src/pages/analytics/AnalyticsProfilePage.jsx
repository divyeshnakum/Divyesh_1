import ProfileHeader from "../../components/analytics/ProfileHeader";
import PersonalInfo from "../../components/analytics/PersonalInfo";
import SubAdminList from "../../components/analytics/SubAdminList";
import { borderColor, bgColor } from "../../components/ColorLayout";
import { useState, useEffect } from "react";
import EditProfileModal from "../../components/analytics/EditProfileModal";
import ReusableTable from "../../components/ReusableTable";
import AddSubAdminModal from "../../components/analytics/AddProfileModal";
const AnalyticsProfilePage = () => {
  const [students, setStudents] = useState([]);
   const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Nakum Divyesh p.",
    email: "divyesh37@xyz.com",
    role: "Super Admin",
    image: "https://i.pravatar.cc/150",
    personalInfo: {
      fullName: "Kapadia Ashish S",
      email: "ashishk37@xyz.com",
      phone: "+91 6353635263",
      gender: "Male",
      dateJoined: "15 Jan 2025",
      lastActivity: "Today 11:45 AM",
    },
  });

  useEffect(() => {
    setStudents([
      {
        adminname: "Divyesh",
        email: "xyz12@gmail.com",
        role: "Computer science",
        status: "Rejected",
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: i + 2,
        adminname: "Milan",
        email: "abc12@gmail.com",
        role: "Computer science",
        status: ["Verified", "Rejected", "Pending"][i % 3],
      })),
    ]);
  }, []);

  const handleSave = (updatedData) => {
    setProfileData((prev) => ({
      ...prev,
      ...updatedData,
      personalInfo: {
        ...prev.personalInfo,
        ...updatedData.personalInfo,
      },
    }));
    setModalOpen(false);
  };
  return (
    <div className={`border ${borderColor} p-4 rounded-2xl space-y-4`}>
      <div>
        <h2 className="text-xl sm:text-3xl font-semibold">My Profile</h2>
      </div>
      <ProfileHeader
        name={profileData.name}
        email={profileData.email}
        role={profileData.role}
        image={profileData.image}
        onEdit={() => setModalOpen(true)}
      />

      <PersonalInfo
        data={[
          { label: "Full Name", value: profileData.personalInfo.fullName },
          { label: "Email", value: profileData.personalInfo.email },
          { label: "Phone Number", value: profileData.personalInfo.phone },
          { label: "Gender", value: profileData.personalInfo.gender },
          { label: "Date Joined", value: profileData.personalInfo.dateJoined },
          {
            label: "Last Activity",
            value: profileData.personalInfo.lastActivity,
          },
        ]}
      />

      <SubAdminList students={students}
      onAdd={() => setOpen(true)}>
        <>
          {" "}
          <ReusableTable
            data={students}
            columns={[
              { key: "adminname", label: "Submit Admin Name" },
              { key: "email", label: "Email" },
              { key: "role", label: "Role" },
              { key: "status", label: "Status" },
            ]}
            showSearch={false}
            showFilter={false}
            isQuizzesPage={false}
          />
         <AddSubAdminModal isOpen={open} onClose={() => setOpen(false)} />
        </>
      </SubAdminList>
      <EditProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={profileData}
      />
    </div>
  );
};

export default AnalyticsProfilePage;
