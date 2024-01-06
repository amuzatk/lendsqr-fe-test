import React, { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, Legend, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts';
import { fetchUsers } from '../../features/user/userActions3';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = fetchUsers();
      setUsers(mockData);
    };

    fetchData();
  }, []);

  const handlePieClick = (entry) => {
    setSelectedStatus(entry.name);
  };

  const getChartData = () => {
    const totalUsers = users.length;

    const barChartData = users.map((user) => ({
      name: user.userName,
      accountBalance: parseFloat(user.accountBalance),
    }));

    const lineChartData = users.map((user) => ({
      name: user.userName,
      monthlyIncome: parseFloat(user.education.monthlyIncome[0]),
    }));

    const pieChartData = [
      { name: 'Active', value: users.filter((user) => user.status.array[0] === 'Active').length },
      { name: 'Inactive', value: users.filter((user) => user.status.array[0] === 'Inactive').length },
      { name: 'Pending', value: users.filter((user) => user.status.array[0] === 'Pending').length },
      { name: 'Blacklisted', value: users.filter((user) => user.status.array[0] === 'Blacklisted').length },
    ];

    return { barChartData, lineChartData, pieChartData };
  };

  const getScatterChartData = () => {
    return users.map((user) => ({
      name: user.userName,
      x: parseFloat(user.education.loanRepayment),
      y: parseFloat(user.accountBalance),
    }));
  };

  return (
    <div
    // style={{
    //     display:"flex",
    //     flexDirection:"column",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     }}
    >
<div style={{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    // gap:"10px"
    padding:"30px"
    }}>
        {/* Scatter Chart */}
      <div style={{ marginTop: '20px' }}>
        <h2>Loan Repayment vs Account Balance Scatter Chart</h2>
        <ScatterChart width={700} height={400}>
          <XAxis type="number" dataKey="x" name="Loan Repayment" unit=" NGN" />
          <YAxis type="number" dataKey="y" name="Account Balance" unit=" NGN" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={getScatterChartData()} fill="#8884d8" />
          <Legend />
        </ScatterChart>
      </div>

      {/* Pie Chart */}
      <div style={{ marginTop: '20px', justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column" }}>
        <h2>User Status Pie Chart</h2>
        <PieChart width={600} height={350}>
          <Pie
            data={getChartData().pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
            onClick={handlePieClick}
          >
            {getChartData().pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
        {selectedStatus && <p>{`Selected status: ${selectedStatus}`}</p>}
      </div>
      </div>
<div
style={{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  // alignItems:"center",
  // gap:"10px"
  padding:"30px"
  }}
>
      {/* Bar Chart */}
      <div style={{ marginTop: '20px' }}>
        <h2>Account Balance Bar Chart</h2>
        <BarChart width={1100} height={500} data={getChartData().barChartData}>
          <Bar dataKey="accountBalance" fill="#8884d8" />
          <Legend />
        </BarChart>
      </div>

      {/* Line Chart */}
      <div style={{ 
        margin: '50px',
         }}>
        <h2>Monthly Income Line Chart</h2>
        <LineChart width={1050} height={500} data={getChartData().lineChartData}>
          <Line type="monotone" dataKey="monthlyIncome" stroke="#8884d8" />
          <Legend />
        </LineChart>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
