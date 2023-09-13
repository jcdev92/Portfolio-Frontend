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
    flex
    flex-col
    md:flex-row
    h-screen
    w-screen
    items-center
    bg-milky-way
    bg-cover
    bg-center
    bg-no-repeat
    md:bg-fixed
    md:bg-left-top
    md:bg-no-repeat
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
  return <SocialMedia />;
};

export const DashboardBlog = () => {
  return <BlogDashboard />;
};
