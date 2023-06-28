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
import useProfileStore from "../../hooks/store/profile";

export const SidebarComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    // remove the profile data from the store
    useProfileStore.getState().clearProfile();
    navigate("/login");
  };

  const profile = useProfileStore((state) => state.profile);

  return (
    <>
      <aside
        id="default-sidebar"
        className="hidden md:block h-5/6 w-2/12 bg-transparent w-2/10 dark:bg-gray-800 border-white"
        aria-label="Sidebar"
      >
        <div className="h-full ml-3 px-4 py-4 overflow-y-auto backdrop-blur-sm bg-white/30  dark:bg-gray-800 border-white border rounded-md">
          <div class="flex flex-col justify-center items-center my-4">
            <img
              class="w-10 h-10 rounded-full border-2 border-double"
              src={profile?.profileImg}
              alt=""
            />
            <div class="font-bebas my-2 text-orange-300 text-center dark:text-white">
              <div>{profile?.firstName}</div>
              <div class="text-sm dark:text-gray-400">{profile?.jobTitle}</div>
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className={
                  window.location.pathname === "/dashboard"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-700"
                }
              >
                <HiUser />
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/skills"
                className={
                  window.location.pathname === "/dashboard/skills"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-700"
                }
              >
                <HiTerminal />
                <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/projects"
                className={
                  window.location.pathname === "/dashboard/projects"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-700"
                }
              >
                <HiOutlineBriefcase />
                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/social-media"
                className={
                  window.location.pathname === "/dashboard/social-media"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-700"
                }
              >
                <HiOutlineGlobe />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  Social Media
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/blog"
                className={
                  window.location.pathname === "/dashboard/blog"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-700"
                }
              >
                <HiOutlineNewspaper />
                <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "flex items-center p-2 text-yellow-300 text-sm rounded-lg dark:text-white dark:hover:bg-gray-700"
                    : "flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-700"
                }
                onClick={handleLogout}
              >
                <HiOutlineLogout />
                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
