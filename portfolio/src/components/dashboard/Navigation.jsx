"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
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
        <img
          alt="JC Logo"
          className="mr-3 h-6 sm:h-9 rounded-full border-2 border-white  border-double dark:border-gray-800 hover:scale-110 transition duration-500 ease-in-out transform"
          src="https://res.cloudinary.com/dwhztsc8v/image/upload/v1687547210/JC%20DEV/logo/jcdev_logo.jpg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          JC DEV
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img={profile?.profileImg}
              rounded
              bordered
              size="md"
              className="mr-2 hidden md:block"
            />
          }
          className="mr-1 hidden md:block"
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {profile?.firstName + " " + profile?.lastName}
            </span>
            <span className="block truncate text-sm font-medium">
              {profile?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="/dashboard">Profile</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <button onClick={handleLogout}>Logout</button>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="sm:hidden">
          <Link className="text-sky-100 hover:text-indigo-800"to="/dashboard">Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-sky-100 hover:text-indigo-800"to="/dashboard/skills">Skills</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-sky-100 hover:text-indigo-800"to="/dashboard/projects">Projects</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-sky-100 hover:text-indigo-800"to="/dashboard/social-media">Social Media</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-sky-100 hover:text-indigo-800"to="/dashboard/blog">Blog</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
