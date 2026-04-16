import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-[#dce4d4]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <div>
          <p className="font-serif text-2xl font-bold text-gray-900">Memento</p>
          <p className="mt-1 text-sm text-gray-700">Designing useful digital products with care.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-800">
          <Link to="/" className="hover:text-red-700">
            Home
          </Link>
          <Link to="/projects" className="hover:text-red-700">
            Projects
          </Link>
          <Link to="/cc" className="hover:text-red-700">
            Credits
          </Link>
          <Link to="/contact" className="hover:text-red-700">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
