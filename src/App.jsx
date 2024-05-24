/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from './mainpage/Home';
import Review from "./mainpage/Review";  
import AdminHome from "./admin/adminHome";
import AdminReview from "./admin/adminReview";
import CurrentApplicant from "./admin/Chart/currentApplicant";
import Recommendations from "./mainpage/Recommendations"


function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/review/:userId" element={<Review />} />
          {/* <Route path="/admin" element={<AdminHome />} /> */}
          <Route path="/recommendations" element={<Recommendations />} />
          {/* <Route path="/admin/review" element ={<AdminReview />} /> */}
          {/* <Route path="/admin/curr" element={<CurrentApplicant/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
