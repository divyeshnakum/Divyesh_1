import Blog from "../../components/Blog";
import DashboardStats from "../../components/DashboardStats";
import SearchIcon from "../../assets/icons/uil_search.png";

const Payment = () => {
  return (
    <>
      <DashboardStats
        title="Payment"
        buttonText="Payment setup"
        showButton={false}
        extraButton={true}
        extraButtonText="Export"
      />
      <Blog />
      <div className="w-full p-4 md:p-6 bg-gray-50">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">Payout Trends</h2>

        {/* Cards */}

        {/* Rewards Table Header */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Rewards Table</h3>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="relative w-full sm:max-w-2xl">
              <img
                src={SearchIcon}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
              />
              <input
                type="text"
                placeholder="Search User / UPI / Payment ID"
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg pl-8 text-sm outline-none "
              />
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg text-sm">
                Status
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm">
                Date
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm">
                Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
