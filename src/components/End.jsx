import "../App.css";


const End = () => {
  return (
    <>
      <div className="relative   bg-[#dce4d4] min-h-screen flex flex-col items-center justify-center px-4 py-10">
        
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Contact</h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
          If you'd like to appreciate our work or have any questions related projects
          then please get in touch — I'd love to hear from you!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:hello@stutpak.com"
            className="bg-red-500 opacity-80 text-black font-semibold py-3 px-6 rounded-full shadow md:hover:bg-gray-900 md:hover:opacity-100 md:hover:text-white md:hover:text-xl transition"
          >
            Send An Email
          </a>
         
        </div>

        <div className="flex flex-wrap justify-center gap-16 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Andra de Vlieger</h3>
            <p className="text-gray-700">Karel Mullerweg 41</p>
            <p className="text-gray-700">7425 BP Deventer, NL</p>
            <p className="text-gray-700 italic">(no visiting address)</p>
            <a
              href="mailto:hello@stutpak.com"
              className="text-[#2a4c46] font-semibold block mt-3 underline"
            >
              {/* hello@stutpak.com */}
            </a>
            <a
              href="tel:+31681042370"
              className="text-[#2a4c46] font-semibold block mt-1"
            >
              +31 6 8104 2370
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Account number</h3>
            <p className="text-gray-700 mb-3">NL20 KNAB 0605 6333 04</p>
            <p className="text-gray-800 font-semibold">COC – number</p>
            <p className="text-gray-700 mb-3">70698376</p>
            <p className="text-gray-800 font-semibold">VAT – number</p>
            <p className="text-gray-700">NL001390938B63</p>
          </div>
        </div>
        <footer className="w-[100%] h-auto overflow-hidden relative bg-[#dce4d4] mt-10">
          <iframe
            title="Animation illustration"
            name="animation-iframe"
            src="https://rarevogel.netlify.app/footer/"
            className="w-full h-auto "
            loading="lazy"
          ></iframe>
        </footer>
      </div>
      
    </>
  );
};

export default End;
