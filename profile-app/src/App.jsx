import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullPageLayout from "./content/FullPageLayout"; 
import ProjectsPage from "./Pages/ProjectsPage";
import Ccpage from "./Pages/CcPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPageLayout />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cc" element={<Ccpage/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
