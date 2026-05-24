// import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Sidebar />
      <main className="ml-64 pt-20 p-6 ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
