import "../App.css";

const Touch = () => {
  return (
    <>
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center p-6 text-gray-950 bg-gray-100">
      <div className=" md:block bubble absolute top-4/5 md:top-2/3  right-0 md:left-[2%] -translate-y-2/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#dce4d4]  rounded-full animate-float z-0 " />

      {/* Left  */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end px-5 md:px-10 lg:px-20 relative">
        <div className="w-full max-w-xl text-left">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-serif font-bold mb-8 md:mb-15">
              Let's connect
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-xl font-mono font-medium leading-relaxed tracking-tight">
              I’m a solo full-stack developer who takes care of everything from initial concept and design to development and deployment. Whether you have a clear project idea or just a rough vision, I’m here to help you turn it into a functional and reliable web application.
              <br />
              <br />
              Feel free to reach out anytime—whether to discuss your goals, explore possibilities, or just talk tech over a virtual chai. Together, we can build something simple, elegant, and effective that truly makes an impact.
            </p>
            
            <a
              href="#Contact"
              className="mt-6 md:mt-10 inline-block w-40 sm:w-60 px-3 py-2 sm:px-4 sm:py-3 text-center font-bold text-base sm:text-lg bg-red-500 opacity-80 text-black rounded-full md:hover:bg-gray-900 md:hover:opacity-100 md:hover:text-white  transition duration-300"
            >
              Get In Touch
            </a>
          </div>
      </div>

      {/* Right  */}
      <div className="w-full sm:w-4/5 md:w-1/2 flex justify-center items-center z-0  ">
      
         <div className="w-full h-[300px] md:h-[500px] overflow-hidden  ">
          <iframe
            title="Animation illustration"
            name="animation-iframe"
            src="https://rarevogel.netlify.app/3/"
            className="w-full h-full border-0 "
            loading="lazy "
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default Touch;
