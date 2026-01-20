import GeneralSettings from "../../components/setting/GeneralSettings";
import NotificationSecurity from "../../components/setting/NotificationSecurity";
import AppearanceSettings from "../components/setting/AppearanceSettings";
import PasswordUpdate from "../components/setting/PasswordUpdate";

const SettingsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Setting</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeneralSettings />
        <NotificationSecurity />
        <AppearanceSettings />
        <PasswordUpdate />
      </div>
    </div>
  );
};

export default SettingsPage;
