import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";

const navClass =
  "rounded-full px-3 py-1.5 transition duration-300 hover:bg-red-500/15 hover:text-red-700";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const jumpToHomeSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="matte-glass sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Memento logo" className="h-9 w-auto object-contain sm:h-11" />
          <span className="font-serif text-2xl font-bold tracking-wide text-gray-900">
            Memento
          </span>
        </Link>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl border border-gray-300 px-3 py-1.5 text-xl text-gray-800 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav className="hidden items-center gap-2 font-semibold text-gray-800 md:flex">
          <Link className={navClass} to="/" onClick={handleHomeClick}>
            Home
          </Link>
          <Link className={navClass} to="/projects">
            Projects
          </Link>
          <Link className={navClass} to="/cc">
            Credits
          </Link>
          <button className={navClass} onClick={() => jumpToHomeSection("about")}>
            About
          </button>
          <Link className={navClass} to="/contact">
            Contact
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu overlay"
            className="absolute inset-0 h-full w-full bg-black/25 backdrop-blur-md"
          />

          <div className="absolute left-4 right-4 top-4 rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
              <span className="font-serif text-3xl font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-gray-300 px-3 py-1.5 text-xl text-gray-800"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-4 py-5 text-2xl font-semibold text-gray-900">
              <Link className={navClass} to="/" onClick={handleHomeClick}>
                Home
              </Link>
              <Link className={navClass} to="/projects">
                Projects
              </Link>
              <Link className={navClass} to="/cc">
                Credits
              </Link>
              <button className={`${navClass} text-left`} onClick={() => jumpToHomeSection("about")}>
                About
              </button>
              <Link className={navClass} to="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
