import { Outlet } from "react-router-dom";
import { Profile } from "../components/dashboard/Profile";
import { Skills } from "../components/dashboard/Skills/Skills";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Projects } from "../components/dashboard/Projects/Projects";
import { SocialMedia } from "../components/dashboard/SocialMedia/SocialMedia";
import { Animated } from "../components/dashboard/Animated";
import Messages from "../components/dashboard/Messages/Messages";

export const DashboardPage = () => {
  return (
    <div
      className="
      hidden
    md:flex-row
    h-screen
    w-screen
    lg:flex
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
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-black to-blue-700 opacity-80 animate-gradient-x"></div>
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
  
export const DashboardMessages = () => {
  return (
    <div className="w-full h-full">
      <Animated>
        <Messages />
      </Animated>
    </div>
  );
};
