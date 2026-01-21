import { borderColor,bgColor, bgCartColor } from "../ColorLayout";

const AppearanceSettings = () => {
  return (
    <div className={`border ${bgCartColor} ${borderColor} rounded-2xl shadow p-4`}>
<div className={`border-b pb-2 mb-2 ${borderColor}`}>
      <h2 className="text-base sm:text-lg font-semibold">Appearance / Theme Settings</h2>
</div>
<div className={`border-b pb-2 mb-2 border-dashed ${borderColor}`}>
      <h3 className="text-sm font-semibold ">Notification Toggles</h3>
</div>

      <div className="mb-4 text-xs">
        <p className=" mb-2">Admin Panel Theme Mode</p>
        <div className="flex gap-4 ">
          <label><input type="radio" name="admin" className="accent-black" /> Dark</label>
          <label><input type="radio" name="admin" className="accent-black" /> Light</label>
          <label><input type="radio" name="admin" className="accent-black" defaultChecked /> System</label>
        </div>
      </div>

      <div className="mb-6 text-xs">
        <p className=" mb-2 ">Students App Theme Mode</p>
        <div className="flex gap-4">
          <label><input type="radio" name="student" className="accent-black" /> Dark</label>
          <label><input type="radio" name="student" className="accent-black" /> Light</label>
          <label><input type="radio" name="student" className="accent-black" defaultChecked /> System</label>
        </div>
      </div>

      <button className={`w-full bg-gray-300 py-3 rounded-xl cursor-pointer`}>
        Default
      </button>
    </div>
  );
};

export default AppearanceSettings;

