const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
);

const PersonalInfo = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold mb-4">Personal Information</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
