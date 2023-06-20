import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/dashboard/Navigation";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <Navigation />
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Log Out</button>
      <Outlet />
    </div>
  );
};

export const DashboardProfile = () => {
  return <div>Profile</div>;
};

export const DashboardSkills = () => {
  return <div>Skills</div>;
};

export const DashboardProjects = () => {
  return <div>Projects</div>;
};

export const DashboardSocialMedia = () => {
  return <div>Social Media</div>;
};

export const DashboardBlog = () => {
  return <div>Blog</div>;
};
