export const BackToTop = () => {
  return (
    <a
      href="#Home"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 z-50 bg-red-500 opacity-70 hover:bg-red-600 hover:opacity-100 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
      title="Back to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </a>
  );
};
