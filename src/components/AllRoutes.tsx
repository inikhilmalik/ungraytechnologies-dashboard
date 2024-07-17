import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />}></Route>

      <Route path="/" element={<LoginPage />}></Route>

      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default AllRoutes;
