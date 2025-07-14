import "../App.css";

const Content = () => {
  return (
    
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center text-black  bg-[#dce4d4] p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-6 mb-8 font-serif font-extrabold z-10 text-center">
        Demo reel
      </h1>

      <div className="w-[320px] h-[200px] sm:w-[680px] sm:h-[400px] lg:w-[900px] lg:h-[500px] bg-blue-100 rounded-3xl z-0 transition-all duration-300"></div>

      <a
        href="/cc"
        className="mt-6 sm:mt-8 md:mt-10 inline-block w-40 sm:w-52 md:w-60 px-3 py-2 sm:px-4 sm:py-3 text-center font-semibold text-base sm:text-lg bg-gray-900 opacity-80 text-white rounded-full md:hover:bg-red-500 md:hover:opacity-100 md:hover:text-black md:hover:text-xl transition duration-300"
      >
        More Info
      </a>
    </div>
  );
};

export default Content;
