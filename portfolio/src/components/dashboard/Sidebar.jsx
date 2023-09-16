"use client";
import {
  HiOutlineNewspaper,
  HiTerminal,
  HiOutlineLogout,
  HiUser,
  HiOutlineBriefcase,
  HiOutlineGlobe,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useProfileStore from "../../store/useProfileStore";

export const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const profile = useProfileStore((state) => state.profile);

  return (
    <>
      <aside
        id="default-sidebar"
        className="lg:h-5/6 xl:h-4/6 bg-transparent w-1/5 dark:bg-gray-800 z-30"
        aria-label="Sidebar"
      >
        <div className="h-full ml-3 px-4 py-4 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-sky-600 scrollbar-track-transparent backdrop-blur-md shadow-lg dark:bg-gray-800 rounded-md">
          <div className="flex flex-col justify-center items-center my-4 lg:p-2 xl:p-4 border-b border-sky-500/20">
            <img
              className="w-10 h-10 rounded-full border-2 border-double"
              src={profile?.profileImg}
              alt=""
            />
            <div className="font-bebas my-2 text-yellow-300 text-center">
              <div>{profile?.firstName}</div>
              <div className="text-sm dark:text-gray-400">
                {profile?.jobTitle}
              </div>
            </div>
          </div>
          <ul className="space-y-2 font-exo">
            <li>
              <Link
                to="/dashboard"
                className={
                  window.location.pathname === "/dashboard"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg transition-all ease-in-out duration-200"
                    : "flex items-center p-2 text-white rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:text-indigo-700"
                }
              >
                <HiUser />
                <span className="flex-1 ml-3 whitespace-nowrap uppercase">profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/skills"
                className={
                  window.location.pathname === "/dashboard/skills"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg transition-all ease-in-out duration-200"
                    : "flex items-center p-2 text-white rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:text-indigo-700"
                }
              >
                <HiTerminal />
                <span className="flex-1 ml-3 whitespace-nowrap uppercase">skills</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/projects"
                className={
                  window.location.pathname === "/dashboard/projects"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg transition-all ease-in-out duration-200"
                    : "flex items-center p-2 text-white rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:text-indigo-700"
                }
              >
                <HiOutlineBriefcase />
                <span className="flex-1 ml-3 whitespace-nowrap uppercase">projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/social-media"
                className={
                  window.location.pathname === "/dashboard/social-media"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg transition-all ease-in-out duration-200"
                    : "flex items-center p-2 text-white rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:text-indigo-700"
                }
              >
                <HiOutlineGlobe />
                <span className="flex-1 ml-3 whitespace-nowrap uppercase">
                  social media
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/blog-dashboard"
                className={
                  window.location.pathname === "/dashboard/blog-dashboard"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg transition-all ease-in-out duration-200"
                    : "flex items-center p-2 text-white rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:text-indigo-700"
                }
              >
                <HiOutlineNewspaper />
                <span className="flex-1 ml-3 whitespace-nowrap uppercase">Blog</span>
              </Link>
            </li>
            <li className="border-t border-sky-500/20 xl:py-4">
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "flex items-center p-2 mt-2 text-yellow-300 text-sm rounded-lg transition-all ease-in-out duration-200"
                    : "flex items-center p-2 mt-2 text-white rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:text-indigo-700"
                }
                onClick={handleLogout}
              >
                <HiOutlineLogout />
                <span className="flex-1 ml-3 whitespace-nowrap uppercase">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
