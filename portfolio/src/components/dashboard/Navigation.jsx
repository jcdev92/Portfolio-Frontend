"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/src/assets/react.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-indigo-950 dark:text-white">
          Portfolio
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Jesus Clemente</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="/dashboard/profile">Profile</Link>
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
