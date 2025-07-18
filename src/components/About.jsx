import "../App.css";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center p-6 text-gray-950 bg-white">
        <div
          className="hidden md:md:block absolute top-1/2 right-5 md:right-20 -translate-y-1/2
                   w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]
                   bg-[#fea500] rounded-full animate-float opacity-25 z-0"
        />

        
        <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center z-0 ">
          <div className="w-full h-[300px] md:h-[500px] overflow-hidden border-0 ">
            <iframe
              title="Animation illustration "
              name="animation-iframe"
              src="https://rarevogel.netlify.app/1/"
              className="w-full h-full bg-transparent border-0"
              loading="lazy"
              allowtransparency="true"
            ></iframe>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-5 md:px-10 lg:px-20 relative">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-10">
              About
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-xl font-mono font-medium leading-relaxed tracking-tight">
              I’m Gaurav, a dedicated full-stack software developer based in India. I specialize in building clean, efficient, and scalable web applications, managing both frontend and backend development end-to-end. I’m passionate about turning ideas into reliable, user-friendly digital solutions that make a real impact.
              <br />
              <br />
              Constantly exploring new technologies and best practices, I strive to deliver high-quality work tailored to each project. When I’m not coding, I enjoy sipping chai and diving into the latest tech trends. Let’s connect and build something great together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
