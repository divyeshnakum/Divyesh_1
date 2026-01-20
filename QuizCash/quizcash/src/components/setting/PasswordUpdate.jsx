const PasswordUpdate = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Password Update</h2>

      <input className="input mb-4" placeholder="Old Password" type="password" />
      <input className="input mb-4" placeholder="New Password" type="password" />

      <button className="w-full bg-yellow-400 hover:bg-yellow-500 font-semibold py-3 rounded-lg">
        Update
      </button>
    </div>
  );
};

export default PasswordUpdate;
