import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="skills" element={<DashboardSkills />} />
            <Route path="projects" element={<DashboardProjects />} />
            <Route path="socialMedia" element={<DashboardSocialMedia />} />
            <Route path="blog" element={<DashboardBlog />} />
          </Route>
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
