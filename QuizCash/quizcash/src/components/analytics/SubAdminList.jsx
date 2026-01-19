const SubAdminList = ({ admins, onAdd }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <h3 className="font-semibold">Sub Admin List</h3>

        <button
          onClick={onAdd}
          className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm"
        >
          Add New Sub Admin
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border rounded-lg px-3 py-2 w-full sm:w-1/2"
        />

        <select className="border rounded-lg px-3 py-2">
          <option>All - Roles</option>
        </select>

        <select className="border rounded-lg px-3 py-2">
          <option>All - Status</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Role</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="px-4 py-2">{admin.name}</td>
                <td className="px-4 py-2 text-gray-500">{admin.email}</td>
                <td className="px-4 py-2">{admin.role}</td>
                <td className={`px-4 py-2 ${admin.status === "Active" ? "text-green-600" : "text-gray-400"}`}>
                  {admin.status}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="border rounded p-1">✏️</button>
                  <button className="border rounded p-1">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubAdminList;
