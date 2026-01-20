const Toggle = ({ checked = false }) => (
  <div className={`w-10 h-5 rounded-full ${checked ? "bg-yellow-400" : "bg-gray-300"} relative`}>
    <div
      className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${
        checked ? "right-0.5" : "left-0.5"
      }`}
    />
  </div>
);

const NotificationSecurity = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Notifications & Security</h2>
        <button className="text-sm text-gray-500">Reset</button>
      </div>

      <h3 className="text-sm font-semibold mb-2">Notification Toggles</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span>Reward Distribution Alerts</span>
          <Toggle checked />
        </div>
        <div className="flex justify-between items-center">
          <span>Payment Alerts</span>
          <Toggle checked />
        </div>
        <div className="flex justify-between items-center">
          <span>New User Registration Alerts</span>
          <Toggle checked />
        </div>
        <div className="flex justify-between items-center">
          <span>Quiz Report Alerts</span>
          <Toggle />
        </div>
      </div>

      <hr className="my-4" />

      <h3 className="text-sm font-semibold mb-2">System Setting</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span>Enable 2FA Login</span>
          <Toggle />
        </div>
        <div className="flex justify-between items-center">
          <span>Block Suspicious IPs</span>
          <Toggle />
        </div>
        <div>
          <p className="mb-2">Auto Logout Timer</p>
          <div className="flex gap-4">
            <label><input type="radio" name="logout" /> 10m</label>
            <label><input type="radio" name="logout" /> 30m</label>
            <label><input type="radio" name="logout" defaultChecked /> 60m</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSecurity;
