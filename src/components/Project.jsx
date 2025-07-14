import img1 from "../assets/video.webp";
import img2 from "../assets/chat.webp";
import img3 from "../assets/dashboard.webp";
import img4 from "../assets/Mcq.webp";

const Project = () => {
  return (
    <div className="relative w-full  bg-[#dce4d4] py-12 px-4 sm:px-8 text-gray-700 font-serif  hide-scrollbar scroll-smooth">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left md:text-center mb-4 ">
        Selected Work
      </h1>
      <h4 className="text-lg sm:text-xl md:text-2xl text-left md:text-center mb-10 font-mono">
        Below, you can find a selection of projects I worked on.
      </h4>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        <div className="relative bg-red-400 aspect-[5/4] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105 ">
          <img
            src={img1}
            alt="Project 1"
            className="w-full h-full object-cover"
          />
          <div
            className=" w-1px h-fit absolute inset-2 flex items-start justify-end
          "
          >
            <span className="text-gray-700 text-l md:text-xl font-semibold">
              Project 1
            </span>
          </div>
        </div>

        <div className="relative bg-red-400 aspect-[5/4] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105 ">
          <img
            src={img2}
            alt="Project 2"
            className="w-full h-full object-cover"
          />
          <div
            className=" w-1px h-fit absolute inset-2 flex items-start justify-end
          "
          >
            <span className="text-gray-700 text-l md:text-xl font-semibold">
              Project 2
            </span>
          </div>
        </div>

        <div className="relative bg-red-400 aspect-[5/4] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img
            src={img3}
            alt="Project 3"
            className="w-full h-full object-cover"
          />
          <div
            className=" w-1px h-fit absolute inset-2 flex items-start justify-end
          "
          >
            <span className="text-gray-700 text-l md:text-xl font-semibold">
              Project 3
            </span>
          </div>
        </div>

        <div className="relative bg-red-400 aspect-[5/4] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
          <img
            src={img4}
            alt="Project 4"
            className="w-full h-full object-cover"
          />
          <div
            className=" w-1px h-fit absolute inset-2 flex items-start justify-end
          "
          >
            <span className="text-gray-700 text-l md:text-xl font-semibold">
              Project 4
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/projects"
          className="w-45 sm:w-60 px-3 py-2 sm:px-4 sm:py-3 flex justify-center text-center font-bold text-base sm:text-lg bg-red-500 opacity-80 text-black rounded-full md:hover:bg-gray-900 hover:opacity-100 hover:text-white md:hover:text-xl  transition duration-300"
        >
          Projects &nbsp;Detail
        </a>
      </div>
    </div>
  );
};

export default Project;
