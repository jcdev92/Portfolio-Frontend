import { Outlet } from "react-router-dom";
import { Profile } from "../components/dashboard/Profile";
import { Skills } from "../components/dashboard/Skills/Skills";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Projects } from "../components/dashboard/Projects/Projects";
import { SocialMedia } from "../components/dashboard/SocialMedia/SocialMedia";
import { BlogDashboard } from "../components/dashboard/BlogDashboard/BlogDashboard";
import { Animated } from "../components/dashboard/Animated";

export const DashboardPage = () => {
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
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-950 to-purple-900 opacity-80 animate-gradient-x"></div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export const DashboardProfile = () => {
  return (
    <div className="w-full h-full">
      <Animated>
        <Profile />
      </Animated>
    </div>
  );
};

export const DashboardSkills = () => {
  return (
    <div className="w-full h-full">
      <Animated>
        <Skills />
      </Animated>
    </div>
  );
};

export const DashboardProjects = () => {
  return (
    <div className="w-full h-full">
      <Animated>
        <Projects />
      </Animated>
    </div>
  );
};

export const DashboardSocialMedia = () => {
  return (
    <div className="w-full h-full">
      <Animated>
        <SocialMedia />
      </Animated>
    </div>
  );
};

export const DashboardBlog = () => {
  return (
    <div className="w-full h-full">
      <Animated>
        <BlogDashboard />
      </Animated>
    </div>
  );
};
