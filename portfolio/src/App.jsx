import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Portfolio } from "./pages/PortfolioPage";
import { LoginPage } from "./pages/LoginPage";
import {
  Dashboard,
  DashboardProfile,
  DashboardSkills,
  DashboardProjects,
  DashboardSocialMedia,
  DashboardBlog,
} from "./pages/DashboardPage";
import { Blog } from "./pages/BlogPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/dashboard/*" element={<Dashboard setUser={setUser}/>}>
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="skills" element={<DashboardSkills />} />
            <Route path="projects" element={<DashboardProjects />} />
            <Route path="socialMedia" element={<DashboardSocialMedia />} />
            <Route path="blog" element={<DashboardBlog />} />
          </Route>
        </Route>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
