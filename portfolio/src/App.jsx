import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Blog } from "./pages/Blog";
import "./App.css";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={!!user} />}>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Navigation />
            <Route path="/profile" element={<DashboardProfile />} />
            <Route path="/skills" element={<DashboardSkills />} />
            <Route path="/projects" element={<DashboardProjects />} />
            <Route path="/socialMedia" element={<DashboardSocialMedia />} />
            <Route path="/blog" element={<DashboardBlog />} />
          </Route>
        </Route>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
