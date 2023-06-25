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
import { NotFound } from "./components/NotFound.jsx";
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
            <Route path="" element={<DashboardProfile />} />
            <Route path="skills" element={<DashboardSkills />} />
            <Route path="projects" element={<DashboardProjects />} />
            <Route path="social-media" element={<DashboardSocialMedia />} />
            <Route path="blog" element={<DashboardBlog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
