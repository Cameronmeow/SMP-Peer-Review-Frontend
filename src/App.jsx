/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from './mainpage/Home';
import Review from "./mainpage/Review";  
// import AdminReview from "./admin/adminReview";
// import CurrentApplicant from "./admin/Chart/currentApplicant";
import Recommendations from "./mainpage/Recommendations";
import Error from "./Error";
import Landing from "./mainpage/Landing";
import AdminReview from "./admin/Review"
import FilledUser from "./admin/FilledUser";
import AllUsers from "./admin/AllUsers";
import AdminLanding from "./admin/AdminLanding";
import AdminHome from "./admin/AdminHome"

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>

          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/adminreview" element={<AdminReview />} />
          <Route path="/review/:userId" element={<Review />} />
          <Route path="/admin" element={<AdminLanding/>}/>
          <Route path="/admin/home" element={<AdminHome/>}/>
          <Route path="/admin/filleduser" element={<FilledUser/>} />
          <Route path="/admin/allusers" element={<AllUsers />} />
          <Route path="/recommendations" element={<Recommendations />} />
          {/* <Route path="/admin/review" element ={<AdminReview />} /> */}
          {/* <Route path="/admin/curr" element={<CurrentApplicant/>} /> */}
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
