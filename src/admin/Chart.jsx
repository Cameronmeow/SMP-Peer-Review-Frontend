// Import necessary modules from React and Recharts
import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from 'recharts';

// Sample data for the chart
const data = [
  { name: '1', value: 400 },
  { name: '2', value: 300 },
  { name: '3', value: 300 },
  { name: '4', value: 200 },
  { name: '5', value: 100 },
];

const COLORS = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261','#e76f51'];

// The Chart component
const SimplePieChart = ({question,text}) => (
    <div className="text-center">
    <h4>{question}</h4>
  <ResponsiveContainer width="100%" height={400} padding="0">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        hoverOffset="4"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
  <p>{text}</p>
  </div>
);

// Export the component as the default export
export default SimplePieChart;
