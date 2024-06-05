import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container" style={{fontFamily: "Tilt Neon, sans-serif",fontWeight: "100",fontStyle: "normal"}}>
      <table className="beautiful-table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
