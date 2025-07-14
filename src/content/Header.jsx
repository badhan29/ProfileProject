import { useState } from "react";
import logo from "../assets/logo.webp";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const goToContact = () => {
    navigate("/", { state: { scrollTo: "Contact" } });
    closeNavbar();
  };

  const goToAbout = () => {
    navigate("/", { state: { scrollTo: "About" } });
    closeNavbar();
  };

  return (
    <header className="w-full h-16 md:h-40  relative z-40">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-full flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-12 md:h-20 w-auto object-contain"
        />
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleNavbar}
          className="block md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          &#9776;
        </button>

        {/* Mobile Menu (slide in from right) */}
        <div
          className={`fixed top-0 right-0 w-full sm:w-[80%] h-full bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={toggleNavbar}
              className="text-4xl text-gray-800 focus:outline-none"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-10 text-2xl font-semibold text-gray-900 mt-12">
            <li>
              <Link to="/" className="hover:text-red-700">
            Home
          </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-red-700">
            Projects
          </Link>
            </li>
            <li>
              <a
                onClick={goToAbout}
                href="#About"
                className="hover:text-red-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={goToContact}
                href="#Contact"
                className="hover:text-red-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:gap-8 gap-4 text-xl lg:text-2xl font-serif font-bold text-gray-900">
          <Link to="/" className="hover:text-red-700">
            Home
          </Link>

          <Link to="/projects" className="hover:text-red-700">
            Projects
          </Link>
          <a onClick={goToAbout} className="hover:text-red-700 " href="#About">
            About
          </a>
          <a onClick={goToContact} className="hover:text-red-700" href="#Contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
