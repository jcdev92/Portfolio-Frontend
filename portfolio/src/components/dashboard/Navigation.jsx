"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
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
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://res.cloudinary.com/dwhztsc8v/image/upload/v1687547210/JC%20DEV/logo/jcdev_logo.webp"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-indigo-950 dark:text-white">
          Portfolio
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar alt="User settings" img={profile?.profileImg} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Jesus Clemente</span>
            <span className="block truncate text-sm font-medium">
              {profile?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/dashboard/skills">Skills</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/dashboard/projects">Projects</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/dashboard/socialMedia">Social Media</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/dashboard/blog">Blog</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
