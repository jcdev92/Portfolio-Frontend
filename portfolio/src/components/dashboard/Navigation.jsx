import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/skills">Skills</Link>
        </li>
        <li>
          <Link to="/dashboard/projects">Projects</Link>
        </li>
        <li>
          <Link to="/dashboard/socialMedia">Social Media</Link>
        </li>
        <li>
          <Link to="/dashboard/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};
