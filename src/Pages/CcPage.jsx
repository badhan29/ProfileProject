import { HelmetProvider } from "react-helmet-async";
import Header from "../content/Header";
import "../App.css";

const Ccpage = () => {
  return (
    <>
      <HelmetProvider>
        <title>Content Credits | Memento</title>
        <meta
          name="description"
          content="This page give credits to the devlopers of this site"
        />
      </HelmetProvider>
      <div className=" h-screen overflow-scroll md:snap-start p-4 md:p-12 flex flex-col hide-scrollbar scroll-smooth">
        <Header />
        <div className="min-h-screen bg-gray-100 text-gray-800 p-8 md:p-12 mb-20 font-sans relative hide-scrollbar scroll-smooth">
          <div className=" hidden md:block bubble absolute top-2  right-0 md:left-[-15%] -translate-y-2/3 w-[600px] h-[600px]  bg-[#dce4d4] rounded-full animate-float z-0 " />

          <div className="max-w-4xl mx-auto mt-15 md:mt-0 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demo reel
              <div className="w-2/6 h-1 bg-pink-400 mt-2" />
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              A short demo reel of selected (motion) work. In each of the
              projects I was responsible for the concept, design and animation
              (except for 00:18 – 00:19 where I created the designs, animation
              was done by DEPT).
            </p>

            <a
              href="#"
              className="flex items-center text-indigo-600 font-semibold hover:underline"
            >
              <span className="mr-2">🎵</span>
              Water Sark – On the run
            </a>
          </div>

          <div className="flex justify-center items-center mt-10 relative">
            <div className="w-[320px] h-[200px] sm:w-[680px] sm:h-[400px] lg:w-[900px] lg:h-[500px] bg-blue-100 rounded-3xl transition-all duration-300 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ccpage;
