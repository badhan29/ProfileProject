const StandoutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center p-6 text-gray-950 bg-gray-100">
      <div
        className="absolute top-1/2 right-5 md:right-20 -translate-y-1/2
                   w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]
                   bg-[#fea500] rounded-full animate-float opacity-25"
      />

      {/* Left  */}
      <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center z-0  ">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden  ">
          <iframe
            title="Animation illustration"
            name="animation-iframe"
            src="https://rarevogel.netlify.app/2/"
            className="w-full h-full border-0"
            loading="lazy"
            allowtransparency="true"
          ></iframe>
        </div>
      </div>

      {/* Right  */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end px-5 md:px-10 lg:px-20 relative">
        <div className="max-w-xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-10">
            Stand out
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-xl font-mono font-medium leading-relaxed tracking-tight">
            In today’s fast-paced world, efficiency is everything. A well-built
            digital product helps users quickly grasp your value. That’s why I
            develop custom web solutions that not only perform well but also
            deliver real impact. Plus, I add clean design and thoughtful UX to
            keep things both functional and engaging. Win-win! 
            <br />
            <br />
            We’ll collaborate closely (just a screen apart 😉) to get the best results.
            Say what you need—clear communication builds great software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandoutPage;
