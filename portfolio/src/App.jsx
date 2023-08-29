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
} from "./pages/DashboardPage.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";
import { BlogPage } from "./pages/BlogPage.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Route path="blog-dashboard" element={<DashboardBlog />} />
              <Route
                path="*"
                element={<ErrorPage error="404 - Page Not Found" />}
              />
            </Route>
          </Route>
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="*"
            element={<ErrorPage error={"404 - Page Not Found"} />}
          />
        </Routes>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
