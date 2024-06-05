// src/App.jsx
import React from 'react';
import Table from './Component/Table';
import Header from './Component/Header';
import Footer from './Component/Footer'


function FilledUser() {
  const data = [
    { Name: 'name 1', Reviews_Given:'20',Filled_At: 'time' },
    { Name: 'name 2', Reviews_Given:'30',Filled_At: 'time'  },
    { Name: 'name 3', Reviews_Given:'40',Filled_At: 'time'  },
    // Add more rows as needed
  ];

  return (
    <>
    <Header />
    <div style={{fontFamily: "Tilt Neon, sans-serif",fontWeight: "100",fontStyle: "normal"}}>
      <h1 className='text-center' >Users who have filled the form</h1>
      <Table data={data} />
    </div>
    <Footer />
    </>
  );
}

export default FilledUser;
