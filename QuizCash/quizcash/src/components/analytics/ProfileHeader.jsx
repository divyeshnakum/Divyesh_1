const ProfileHeader = ({ name, email, role, image, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
      
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border"
      />

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>

      {/* Button */}
      <button
        onClick={onEdit}
        className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;
