"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import useProfileStore from "../../hooks/store/profile";

export const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const profile = useProfileStore((state) => state.profile);
  return (
    <Navbar fluid rounded className="backdrop-blur-sm bg-white/5 font-bebas">
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-8 sm:h-9 rounded-full border-4 border-white border-double hover:scale-110 transition duration-500 ease-in-out"
          src="https://res.cloudinary.com/dwhztsc8v/image/upload/v1687547210/JC%20DEV/logo/jcdev_logo.webp"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={handleLogout}>Log Out</Button>
        <Navbar.Toggle />
      </div>
      <ul className="flex flex-row gap-16">
        <li className="md:ml-4">
          <Link
            to="/dashboard"
            className={
              // if is dashboard, then text-yellow-300
              // else text-white
              window.location.pathname === "/dashboard"
                ? "text-yellow-300 hover:text-indigo-950"
                : "text-white hover:text-yellow-300"
            }
          >
            Dashboard
          </Link>
        </li>
        <li className="md:ml-4 text-white">
          <Link
            to="/dashboard/skills"
            className={
              // if is dashboard/skills, then text-yellow-300
              // else text-white
              window.location.pathname === "/dashboard/skills"
                ? "text-yellow-300 hover:text-indigo-950"
                : "text-white hover:text-yellow-300"
            }
          >
            Skills
          </Link>
        </li>
        <li className="md:ml-4 text-white">
          <Link
            to="/dashboard/projects"
            className={
              // if is dashboard/projects, then text-yellow-300
              // else text-white
              window.location.pathname === "/dashboard/projects"
                ? "text-yellow-300 hover:text-indigo-950"
                : "text-white hover:text-yellow-300"
            }
          >
            Projects
          </Link>
        </li>
        <li className="md:ml-4 text-white">
          <Link
            to="/dashboard/social-media"
            className={
              // if is dashboard/social-media, then text-yellow-300
              // else text-white
              window.location.pathname === "/dashboard/social-media"
                ? "text-yellow-300 hover:text-indigo-950"
                : "text-white hover:text-yellow-300"
            }
          >
            Social Media
          </Link>
        </li>
        <li className="md:ml-4 text-white">
          <Link
            to="/dashboard/blog"
            className={
              // if is dashboard/blog, then text-yellow-300
              // else text-white
              window.location.pathname === "/dashboard/blog"
                ? "text-yellow-300 hover:text-indigo-950"
                : "text-white hover:text-yellow-300"
            }
          >
            Blog
          </Link>
        </li>
      </ul>
    </Navbar>
  );
};
