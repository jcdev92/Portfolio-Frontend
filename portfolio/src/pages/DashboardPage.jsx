import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/dashboard/Navigation";
import { useNavigate } from "react-router-dom";
import { Profile } from "../components/dashboard/Profile";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="
      flex flex-col
      bg-gradient-to-r
      from-sky-800
      to-indigo-950
      text-white
      font-mono
    "
    >
      <Navigation />
      <Outlet />
    </div>
  );
};

export const DashboardProfile = () => {
  return <Profile />;
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
