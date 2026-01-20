const AppearanceSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Appearance / Theme Settings</h2>

      <div className="mb-4">
        <p className="font-medium mb-2">Admin Panel Theme Mode</p>
        <div className="flex gap-4 text-sm">
          <label><input type="radio" name="admin" /> Dark</label>
          <label><input type="radio" name="admin" /> Light</label>
          <label><input type="radio" name="admin" defaultChecked /> System</label>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">Students App Theme Mode</p>
        <div className="flex gap-4 text-sm">
          <label><input type="radio" name="student" /> Dark</label>
          <label><input type="radio" name="student" /> Light</label>
          <label><input type="radio" name="student" defaultChecked /> System</label>
        </div>
      </div>

      <button className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg">
        Default
      </button>
    </div>
  );
};

export default AppearanceSettings;

