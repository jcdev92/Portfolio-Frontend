import { Outlet } from "react-router-dom";
import { Profile } from "../components/dashboard/Profile";
import { Skills } from "../components/dashboard/Skills/Skills";
import { SidebarComponent } from "../components/dashboard/SidebarComponent";
import { Projects } from "../components/dashboard/Projects/Projects";
import { SocialMedia } from "../components/dashboard/SocialMedia/SocialMedia";
import { BlogDashboard } from "../components/dashboard/BlogDashboard/BlogDashboard";

export const Dashboard = () => {
  return (
    <div
      className="
    md:flex-row
    h-screen
    w-screen
    flex
    flex-col
    items-center
    bg-milky-way
    bg-cover
    bg-center
    bg-no-repeat
    md:bg-fixed
    md:bg-left-top
    md:bg-no-repeat
    relative
    "
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-950 to-blue-600 opacity-50 animate-gradient-x"></div>
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
  return <SocialMedia />;
};

export const DashboardBlog = () => {
  return <BlogDashboard />;
};
