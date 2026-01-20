const GeneralSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">General Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Platform Name" defaultValue="Quiz Cash" />
        <input className="input" placeholder="Support Email" defaultValue="support@quizcash.com" />
        <input className="input" placeholder="Support Phone" defaultValue="+1 (555) 123-4567" />
        <input className="input" placeholder="Support UPI ID" defaultValue="quizcash@upi" />
      </div>

      <textarea
        className="input mt-4 h-24"
        defaultValue="© 2025 Quiz App Inc. All rights reserved."
      />

      <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
        Save Changes
      </button>
    </div>
  );
};

export default GeneralSettings;
