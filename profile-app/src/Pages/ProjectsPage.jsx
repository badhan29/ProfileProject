import { HelmetProvider } from "react-helmet-async";
import Header from "../content/Header";

const ProjectsPage = () => {
  return (
    <>
    <HelmetProvider>
      <title>Projetc's Detail | Memento</title>
      <meta name="description" content="Discription about the projets" />
    </HelmetProvider>
      <Header/>
      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p>Welcome to the Projects page!</p>
      </div>  
    </>
  );
};

export default ProjectsPage;
