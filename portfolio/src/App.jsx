import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { PortfolioPage } from "./pages/PortfolioPage";
import { LoginPage } from "./pages/LoginPage";
import {
  DashboardPage,
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
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard/*" element={<DashboardPage />}>
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
        </AnimatePresence>
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
