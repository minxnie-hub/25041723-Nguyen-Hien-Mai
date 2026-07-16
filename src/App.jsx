import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const anchor = location.state?.anchor;
    const timer = window.setTimeout(() => {
      if (anchor) {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bai-tap/:taskId" element={<TaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
