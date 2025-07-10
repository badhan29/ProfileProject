import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const FullPageLayout = lazy(() => import("./content/FullPageLayout"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage"));
const Ccpage = lazy(() => import("./Pages/CcPage"));



export default function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<FullPageLayout />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cc" element={<Ccpage/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}
