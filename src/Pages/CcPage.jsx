import { HelmetProvider } from "react-helmet-async";
import Header from "../content/Header";


const Ccpage = () => {
  return (
    <>
      <HelmetProvider>
        <title>Content Credits | Memento</title>
        <meta name="description" content="This page give credits to the devlopers of this site" />
      </HelmetProvider>
      <Header />
      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold mb-4">Content Credits</h1>
        <p>Welcome to the project CC page!</p>
        
      </div>
    </>
  );
};

export default Ccpage;
