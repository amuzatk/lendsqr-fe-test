// import React from 'react'

// const index = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default index

// Import necessary components and libraries
import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { fetchUsers } from '../../features/user/userActions3';

const Charts = () => {
  // State to hold the mock data
  const [users, setUsers] = useState([]);

  // Fetch mock data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const mockData = fetchUsers();
      setUsers(mockData);
    };

    fetchData();
  }, []);

  // Function to get data for the charts
  const getChartData = () => {
    // Extract relevant data from users for the charts
    // Modify this part based on your specific requirements
    const barChartData = {
      labels: users.map((user) => user.userName),
      datasets: [
        {
          label: 'Account Balance',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          data: users.map((user) => parseFloat(user.accountBalance)),
        },
      ],
    };

    const lineChartData = {
      labels: users.map((user) => user.userName),
      datasets: [
        {
          label: 'Monthly Income',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          data: users.map((user) => parseFloat(user.education.monthlyIncome[0])),
        },
      ],
    };

    const pieChartData = {
      labels: ['Active', 'Inactive', 'Pending', 'Blacklisted'],
      datasets: [
        {
          data: users.reduce(
            (acc, user) => {
              const status = user.status.array[0];
              acc[status]++;
              return acc;
            },
            { Active: 0, Inactive: 0, Pending: 0, Blacklisted: 0 }
          ),
          backgroundColor: ['green', 'red', 'orange', 'black'],
        },
      ],
    };

    return { barChartData, lineChartData, pieChartData };
  };

  // Render the Charts component
  return (
    <div>
      <h1>Charts Page</h1>

      {/* Bar Chart */}
      <div style={{ marginTop: '20px' }}>
        <h2>Account Balance Bar Chart</h2>
        <Bar data={getChartData().barChartData} />
      </div>

      {/* Line Chart */}
      <div style={{ marginTop: '20px' }}>
        <h2>Monthly Income Line Chart</h2>
        <Line data={getChartData().lineChartData} />
      </div>

      {/* Pie Chart */}
      <div style={{ marginTop: '20px' }}>
        <h2>User Status Pie Chart</h2>
        <Pie data={getChartData().pieChartData} />
      </div>
    </div>
  );
};

export default Charts;
