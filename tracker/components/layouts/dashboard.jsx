import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Business Metrics</h1>
      <div>
        <div>
          <h2>Revenue</h2>
          <p>$1442.72</p>
        </div>
        <div>
          <h2>Expenses</h2>
          <p>$357.47</p>
        </div>
        <div>
          <h2>Profit</h2>
          <p>${1442.72 - 357.47}</p>
        </div>
        <div>
          <h2>Number of Products Sold</h2>
          <p>17</p>
        </div>
        <div>
          <h2>Average Sale Price</h2>
          <p>${Math.round(1442.72 / 17)}</p>
        </div>
        <div>
          <h2>Pending Sales in Dollars</h2>
          <p>$355.22</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
