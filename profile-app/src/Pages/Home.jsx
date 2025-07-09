import "../App.css";
import Gif from "../assets/run.gif";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-gray-950 bg-gray-100">
      
      <div className="hidden md:block fixed top-3/4 left-[-5%] -translate-y-1/2 w-[400px] h-[400px] bg-[#dce4d4] opacity-75       
       rounded-full animate-float z-0 " />

      <div className="hidden md:block fixed top-1/4 right-[-8%] -translate-y-1/2 w-[600px] h-[600px] bg-[#dce4d4] opacity-75 rounded-full animate-float z-0" />

      <div className=" bubbleRed fixed top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#dce4d4] md:bg-red-500 md:opacity-20 rounded-full z-"/>


      <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center p-6">
        {/* Left section */}
        <div className="w-full md:w-1/2 flex justify-start lg:pl-20 z-1">
          <div className="flex flex-col text-left w-full max-w-2xl">
            <h1 className="mb-8 font-serif font-bold mt-15 md:mt-0">
              <span className="inline md:hidden text-2xl sm:text-3xl">
                Welcome!
              </span>
              <span className="hidden md:inline text-3xl sm:text-3xl md:text-4xl lg:text-5xl  ">
                Hello &amp; <br />
                Welcome!
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-mono font-medium leading-relaxed mb-6">
              Hey, I'm Gaurav Badhan, a full-stack software 
              
              developer based in Punjab, India.<br/>
              <br />
              I design and build robust web applications.
              
              <br />
               — from user-friendly frontends to scalable backends
              <br />
              — to help you bring your ideas to life and make an impact.

            </p>
            <a
              href="#Contact"
              className="w-40 sm:w-60 px-3 py-2 sm:px-4 sm:py-3 text-center font-bold text-base sm:text-lg bg-red-500 opacity-80 text-black rounded-full md:hover:bg-gray-900 md:hover:opacity-100 md:hover:text-white md:hover:text-xl transition duration-300"
            >
              Catch Me Here
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="w-full mb-6 md:w-1/3 md:mb-0 mx-auto md:mx-0 z-1 ">
          <img
            src={Gif}
            className="w-full object-contain max-h-72 md:max-h-full"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
