import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/dashboard/Navigation";
import { useNavigate } from "react-router-dom";
import { Profile } from "../components/dashboard/Profile";
import { Skills } from "../components/dashboard/Skills";
import { SidebarComponent } from "../components/dashboard/SidebarComponent";
import { Projects } from "../components/dashboard/Projects";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="
    flex
    flex-col
    md:flex-row
    h-screen
    w-full
    items-center
    justify-center
    bg-gradient-to-r
    from-blue-900
    to-blue-800
    dark:from-gray-800
    dark:to-gray-900
    "
    >
      <SidebarComponent />
      <Outlet />
    </div>
  );
};

export const DashboardProfile = () => {
  return <Profile />;
};

export const DashboardSkills = () => {
  return <Skills />;
};

export const DashboardProjects = () => {
  return <Projects />;
};

export const DashboardSocialMedia = () => {
  return <div>Social Media</div>;
};

export const DashboardBlog = () => {
  return <div>Blog</div>;
};
