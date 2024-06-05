// src/App.jsx
import React from 'react';
import Table from './Table';
import { useState } from 'react';


function ReviewTable(props) {
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable((prevShowTable) => !prevShowTable);
      };
  const data = [
    { Name: 'name 1', Reviews_Given:'20',Filled_At: 'time' },
    { Name: 'name 2', Reviews_Given:'30',Filled_At: 'time'  },
    { Name: 'name 3', Reviews_Given:'40',Filled_At: 'time'  },
    // Add more rows as needed
  ];
  const tableName = props.question;
  return (
    <>    
    <div>   
      <button onClick={toggleTable} className="toggle-button">
        {showTable ? 'Hide Table' : props.question}
      </button>
      {showTable && <Table data={data} />}
    </div>
    </>
  );
}

export default ReviewTable;
