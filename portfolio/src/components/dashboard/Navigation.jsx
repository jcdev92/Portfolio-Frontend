"use client";
import { Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useProfileStore from "../../hooks/store/profile";

export const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    // remove the profile data from the store
    useProfileStore.getState().clearProfile();
    navigate("/login");
  };

  const profile = useProfileStore((state) => state.profile);
  return (
    <Navbar fluid rounded className="backdrop-blur-sm bg-white/5 font-bebas">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          JC DEV
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link
            to="/dashboard"
            className={
              window.location.pathname === "/dashboard"
                ? "text-yellow-300 hover:text-indigo-800 text-xl"
                : "text-sky-100 hover:text-indigo-800 text-2xl"
            }
          >
            Profile
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            className={
              window.location.pathname === "/dashboard/skills"
                ? "text-yellow-300 hover:text-indigo-800 text-xl"
                : "text-sky-100 hover:text-indigo-800 text-2xl"
            }
            to="/dashboard/skills"
          >
            Skills
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            className={
              window.location.pathname === "/dashboard/projects"
                ? "text-yellow-300 hover:text-indigo-800 text-xl"
                : "text-sky-100 hover:text-indigo-800 text-2xl"
            }
            to="/dashboard/projects"
          >
            Projects
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            className={
              window.location.pathname === "/dashboard/social-media"
                ? "text-yellow-300 hover:text-indigo-800 text-xl"
                : "text-sky-100 hover:text-indigo-800 text-2xl"
            }
            to="/dashboard/social-media"
          >
            Social Media
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            className={
              window.location.pathname === "/dashboard/blog"
                ? "text-yellow-300 hover:text-indigo-800 text-xl"
                : "text-sky-100 hover:text-indigo-800 text-2xl"
            }
            to="/dashboard/blog"
          >
            Blog
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
