import { Link } from "react-router-dom";
import img1 from "../assets/video.webp";
import img2 from "../assets/chat.webp";
import img3 from "../assets/dashboard.webp";
import img4 from "../assets/mcq.webp";

const Project = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#dce4d4] text-gray-700 font-serif">

      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 py-10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2">
          Selected Work
        </h1>

        <h4 className="text-lg sm:text-xl md:text-2xl text-center mb-6 font-mono">
          Below, you can find a selection of projects I worked on.
        </h4>

        {/* Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 ">
          {[img1, img2, img3, img4].map((img, i) => (
            <div
              key={i}
              className="relative
                h-44 sm:h-48 md:h-56 lg:h-60 
                rounded-xl overflow-hidden shadow-md 
                transition-transform duration-300 hover:scale-105"
            >
              <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />

              {/* Ribbon */}
              <div className="absolute top-3 left-0 bg-gray-700 opacity-90 text-white px-2 py-1 rounded-r-xl shadow-md">
                <span className="text-sm md:text-base font-semibold">
                  Project {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <Link
            to="/projects"
            className="px-4 py-2 sm:px-5 sm:py-3 font-bold 
              bg-red-500 text-black rounded-full 
              hover:bg-gray-900 hover:text-white 
              transition duration-300"
          >
            Projects Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
