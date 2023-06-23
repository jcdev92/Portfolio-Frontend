"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import useProfileStore from "../../hooks/profile";

export const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const profile = useProfileStore((state) => state.profile);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9 rounded-full"
          src="https://res.cloudinary.com/dwhztsc8v/image/upload/v1687547210/JC%20DEV/logo/jcdev_logo.webp"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={handleLogout}>Log Out</Button>
        <Navbar.Toggle />
      </div>
      <ul className="flex flex-row gap-8">
        <li className="md:ml-4 text-indigo-950 hover:text-blue-300">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="md:ml-4 text-indigo-950 hover:text-blue-300">
          <Link to="/dashboard/skills">Skills</Link>
        </li>
        <li className="md:ml-4 text-indigo-950 hover:text-blue-300">
          <Link to="/dashboard/projects">Projects</Link>
        </li>
        <li className="md:ml-4 text-indigo-950 hover:text-blue-300">
          <Link to="/dashboard/social-media">Social Media</Link>
        </li>
        <li className="md:ml-4 text-indigo-950 hover:text-blue-300">
          <Link to="/dashboard/blog">Blog</Link>
        </li>
      </ul>
    </Navbar>
  );
};
