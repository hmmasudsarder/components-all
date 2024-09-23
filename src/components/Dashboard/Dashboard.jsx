
const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Weekly Sales Card */}
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Weekly Sales</h2>
          <p className="text-xl">$500,000</p>
          <p className="text-sm">Increase by 30%</p>
        </div>

        {/* Monthly Sales Card */}
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Monthly Sales</h2>
          <p className="text-xl">$500,000</p>
          <p className="text-sm">Increase by 20%</p>
        </div>

        {/* Yearly Sales Card */}
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg">Yearly Sales</h2>
          <p className="text-xl">$500,000</p>
          <p className="text-sm">Increase by 10%</p>
        </div>

        {/* Charts */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Placeholder for charts */}
            <p>Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
