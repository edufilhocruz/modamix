import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "@/components/admin/AdminNavbar";

const AdminLayout = () => (
  <div className="relative min-h-screen max-w-sm mx-auto bg-white">
    <Outlet />
    <AdminNavbar />
  </div>
);

export default AdminLayout;